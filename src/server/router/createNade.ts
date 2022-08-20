import { z } from "zod";
import { createRouter } from "./context";

const tooSmallMsg = "Debe tener mínimo 4 letras.";
const required_error = "Campo obligatorio.";

export const createNade = createRouter().mutation("create-nade", {
  input: z.object({
    thrownFrom: z
      .string({ required_error: required_error })
      .min(4, { message: tooSmallMsg }),
    endLocation: z.string({ required_error }).min(4, { message: tooSmallMsg }),
    nadeType: z.string({ required_error }),
    fromMap: z.string({ required_error }),
    ttOrCt: z.string({ required_error }),
    gfycatUrl: z
      .string({ required_error })
      .regex(new RegExp("https://gfycat.com/[a-zA-Z]+")),
    description: z.string({ required_error }).optional(),
    movement: z.string({ required_error }),
    technique: z.string({ required_error }),
    position: z.string({ required_error }),
  }),
  async resolve({ input }) {
    return {};
  },
});
