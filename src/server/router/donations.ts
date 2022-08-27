import { TRPCError } from "@trpc/server";
import { createProtectedRouter } from "./protected-router";

export const donationsRouter = createProtectedRouter().query("getAll", {
  async resolve({ ctx }) {
    const donactions = await ctx.prisma.payment.findMany({
      orderBy: {
        date: "desc",
      },
      include: {
        user: true,
      },
    });
    if (!donactions)
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Nema nijedne donacije",
      });

    return donactions;
  },
});
