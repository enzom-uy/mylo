import { prisma } from "@/server/db/client";
import { z } from "zod";
import { createRouter } from "./context";

const tooSmallMsg = "Debe tener mínimo 4 letras.";
const required_error = "Campo obligatorio.";

export const nadeRouter = createRouter()
  .mutation("create", {
    input: z.object({
      thrownFrom: z
        .string({ required_error: required_error })
        .min(4, { message: tooSmallMsg }),
      endLocation: z
        .string({ required_error })
        .min(4, { message: tooSmallMsg }),
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
  })
  .mutation("getAllUnapprovedNades", {
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
  })
  .mutation("getNadesFromUser", {
    input: z.object({
      email: z.string(),
    }),
    async resolve({ input }) {
      const nades = await prisma.nade.findMany({
        where: {
          user: {
            email: input.email,
          },
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
  })
  .mutation("edit", {
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
