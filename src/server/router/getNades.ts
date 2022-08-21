import { NadeType } from "@/interfaces/nades";
import { prisma } from "@/server/db/client";
import { z } from "zod";
import { createRouter } from "./context";

export const getNadesRouter = createRouter().mutation("getAllNades", {
  input: z.object({
    typeOrAll: z.string(),
  }),
  async resolve({ input, ctx }) {
    const wantToGet = input.typeOrAll as
      | "smokes"
      | "flashes"
      | "molos"
      | "detos"
      | "one ways"
      | "all";

    switch (wantToGet) {
      case "all":
        return await ctx.prisma.nade.findMany({});

      case "detos":
        return await ctx.prisma.nade.findMany({
          where: {
            nadeType: "Deto",
          },
        });

      case "smokes":
        return await ctx.prisma.nade.findMany({
          where: {
            nadeType: "Smoke",
          },
        });

      case "flashes":
        return await ctx.prisma.nade.findMany({
          where: {
            nadeType: "Flash",
          },
        });

      case "molos":
        return await ctx.prisma.nade.findMany({
          where: {
            nadeType: "Molo",
          },
        });

      case "one ways":
        return await ctx.prisma.nade.findMany({
          where: {
            nadeType: "One way",
          },
        });

      default:
        return await ctx.prisma.nade.findMany({});
    }
  },
});
