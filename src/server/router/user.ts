import { createRouter } from "./context";
import * as trpc from "@trpc/server";

export const userRouter = createRouter().query("getUser", {
  async resolve({ ctx }) {
    if (!ctx.session?.user || !ctx.session) {
      return;
    }
    const user = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session?.user?.id,
      },
    });
    if (!user) {
      throw new trpc.TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    } else return user;
  },
});
