// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { paypalRouter } from "./paypal";
import { protectedExampleRouter } from "./protected-example-router";
import { issueRouter } from "./issue";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("paypal.", paypalRouter)
  .merge("question.", protectedExampleRouter)
  .merge("issue.", issueRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
