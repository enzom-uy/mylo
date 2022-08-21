// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { createNadeRouter } from "./createNade";
import { getNadesRouter } from "./getNades";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("createNade.", createNadeRouter)
  .merge("getNades.", getNadesRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
