import { prisma } from "@/server/db/client";
import { z } from "zod";
import { createRouter } from "./context";

const tooSmallMsg = "Debe tener mínimo 4 letras.";
const required_error = "Campo obligatorio.";

export const editNadeRouter = createRouter().mutation("edit", {
  input: z.object({
    id: z.string(),
    thrownFrom: z
      .string({ required_error: required_error })
      .min(4, { message: tooSmallMsg })
      .optional(),
    endLocation: z
      .string({ required_error })
      .min(4, { message: tooSmallMsg })
      .optional(),
    map: z.string().optional(),
    ttOrCt: z.string({ required_error }).optional(),
    gfycatUrl: z
      .string({ required_error })
      .regex(new RegExp("https://gfycat.com/ifr/[a-zA-Z]+"))
      .optional(),
    description: z.string({ required_error }).optional(),
    movement: z.string({ required_error }).optional(),
    technique: z.string({ required_error }).optional(),
    position: z.string({ required_error }).optional(),
    tickrate: z.string({ required_error }).optional(),
    nadeType: z.string({ required_error }).optional(),
  }),
  async resolve({ input }) {
    const newNade = await prisma.nade.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
        approved: true,
        map: {
          connect: {
            mapName: input.map,
          },
        },
      },
    });

    return { newNade, status: "EDITED" };
  },
});
