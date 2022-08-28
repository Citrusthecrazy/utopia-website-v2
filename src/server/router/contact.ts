import { TRPCError } from "@trpc/server";
import z from "zod";
import { env } from "../../env/server.mjs";
import { createRouter } from "./context";
export const contactRouter = createRouter()
  .mutation("sendMessage", {
    input: z.object({
      name: z.string(),
      email: z.string(),
      message: z.string(),
      captchaToken: z.string(),
    }),
    async resolve({ input, ctx }) {
      if (
        !input.email ||
        !input.message ||
        !input.name ||
        !input.captchaToken
      ) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Popunite sva polja!",
        });
      }
      const { email, message, name, captchaToken } = input;
      const isCaptchaSuccessful = await validateCaptcha(captchaToken);
      if (!isCaptchaSuccessful) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Dokažite da niste robot!",
        });
      }
      await ctx.prisma.message.create({
        data: {
          author: name,
          authorEmail: email,
          content: message,
        },
      });
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      if (!ctx.session || !ctx.session?.user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Niste ulogovani!",
        });
      }
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: ctx.session.user.id,
        },
      });
      if (user?.role !== "admin") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Nemate pravo pristupa!",
        });
      }
      return await ctx.prisma.message.findMany();
    },
  });

const validateCaptcha = async (captchaToken: string) => {
  const { success: isCaptchaSuccessful } = await fetch(
    "https://hcaptcha.com/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${env.HCAPTCHA_SECRET}&response=${captchaToken}`,
    }
  ).then((res) => res.json());
  return isCaptchaSuccessful;
};
