// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { paypalRouter } from "./paypal";
import { protectedExampleRouter } from "./protected-example-router";
import { issueRouter } from "./issue";
import { userRouter } from "./user";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("paypal.", paypalRouter)
  .merge("question.", protectedExampleRouter)
  .merge("issue.", issueRouter)
  .merge("user.", userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
