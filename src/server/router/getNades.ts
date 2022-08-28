import { prisma } from "@/server/db/client";
import { z } from "zod";
import { createRouter } from "./context";

export const getNadesRouter = createRouter().mutation("getAllUnapprovedNades", {
  async resolve() {
    const nades = await prisma.nade.findMany({
      where: {
        approved: false,
      },
      include: {
        map: {
          select: {
            mapName: true,
          },
        },
      },
    });
    return nades;
  },
});
