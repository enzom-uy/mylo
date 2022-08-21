// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { nadesRouter } from "./createNade";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("createNade.", nadesRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
