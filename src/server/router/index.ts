// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { createNadeRouter } from "./createNade";
import { editNadeRouter } from "./editNade";
import { getNadesRouter } from "./getNades";
import { getUserRouter } from "./getUser";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("createNade.", createNadeRouter)
  .merge("getNades.", getNadesRouter)
  .merge("editNade.", editNadeRouter)
  .merge("getUser.", getUserRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
