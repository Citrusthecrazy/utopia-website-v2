import { createRouter } from "./context";
import { z } from "zod";
import client from "../../lib/paypal";
import paypal from "@paypal/checkout-server-sdk";
import { TRPCError } from "@trpc/server";

export const paypalRouter = createRouter()
  .mutation("createOrder", {
    input: z.object({
      amountOfCoins: z.number().int().positive().min(5).max(100),
      name: z.string(),
      email: z.string().email(),
      state: z.string(),
      address: z.string(),
      serverId: z.string(),
    }),
    async resolve({ input, ctx }) {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          message: "Morate biti ulogovani",
          code: "UNAUTHORIZED",
        });
      }
      if (
        !input?.amountOfCoins ||
        !input?.name ||
        !input?.email ||
        !input?.state ||
        !input?.address ||
        !input?.serverId
      ) {
        throw new TRPCError({
          message: "Potrebno je uneti sve podatke",
          code: "BAD_REQUEST",
        });
      }
      const PaypalClient = client();
      const request = new paypal.orders.OrdersCreateRequest();
      request.headers["Prefer"] = "return=representation";
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: input?.amountOfCoins.toString(),
            },
          },
        ],
      });
      const response = await PaypalClient.execute(request);
      if (response.statusCode !== 201) {
        throw new TRPCError({
          message: "Greška pri kreiranju porudžbine",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
      await ctx.prisma.payment
        .create({
          data: {
            orderID: response.result.id,
            userId: ctx.session.user.id,
            status: "PENDING",
            amount: input?.amountOfCoins,
            name: input?.name,
            email: input?.email,
            state: input?.state,
            address: input?.address,
            serverId: input?.serverId,
          },
        })
        .catch((err) => {
          throw new TRPCError({
            message: err,
            code: "INTERNAL_SERVER_ERROR",
          });
        });
      return { orderId: response.result.id };
    },
  })
  .mutation("captureOrder", {
    input: z
      .object({
        orderId: z.string(),
      })
      .nullish(),
    async resolve({ input, ctx }) {
      if (!input?.orderId) {
        throw new TRPCError({
          message: "Greška pri obradi porudžbine",
          code: "PARSE_ERROR",
        });
      }
      const PaypalClient = client();
      const request = new paypal.orders.OrdersCaptureRequest(input?.orderId);
      const response = await PaypalClient.execute(request);
      if (!response) {
        throw new TRPCError({
          message: "Greška pri obradi porudžbine",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
      await ctx.prisma.payment.updateMany({
        where: {
          orderID: input.orderId,
        },
        data: {
          status: "PAID",
        },
      });
      return { message: "Uspešno ste platili porudžbinu" };
    },
  });
