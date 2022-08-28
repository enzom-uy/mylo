import { prisma } from "@/server/db/client";
import { z } from "zod";
import { createRouter } from "./context";

const tooSmallMsg = "Debe tener mínimo 4 letras.";
const required_error = "Campo obligatorio.";

export const createNadeRouter = createRouter().mutation("create", {
  input: z.object({
    thrownFrom: z
      .string({ required_error: required_error })
      .min(4, { message: tooSmallMsg }),
    endLocation: z.string({ required_error }).min(4, { message: tooSmallMsg }),
    map: z.string(),
    ttOrCt: z.string({ required_error }),
    gfycatUrl: z
      .string({ required_error })
      .regex(new RegExp("https://gfycat.com/ifr/[a-zA-Z]+")),
    description: z.string({ required_error }).optional(),
    movement: z.string({ required_error }),
    technique: z.string({ required_error }),
    position: z.string({ required_error }),
    tickrate: z.string({ required_error }),
    user: z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      role: z.string(),
    }),
    nadeType: z.string({ required_error }),
  }),
  async resolve({ input, ctx }) {
    const nadeAlreadyExists = await prisma.nade.findFirst({
      where: {
        gfycatUrl: input.gfycatUrl,
      },
    });
    let error;
    if (nadeAlreadyExists) {
      error = {
        error: "ALREADY_EXISTS",
        message: "Ya existe una granada con el mismo link de Gfycat.",
      };
      return error;
    }

    const newNade = await ctx.prisma.nade.create({
      data: {
        ...input,
        approved: false,
        user: {
          connect: {
            email: ctx!.session!.user!.email as string,
          },
        },
        map: {
          connect: {
            mapName: input.map,
          },
        },
      },
    });

    return { newNade, status: "UPLOADED", error: error };
  },
});
