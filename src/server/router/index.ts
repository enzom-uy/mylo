// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { createNade } from "./createNade";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("createNade.", createNade);

// export type definition of API
export type AppRouter = typeof appRouter;
