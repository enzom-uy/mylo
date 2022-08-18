import { z } from "zod";
import { createRouter } from "./context";

const required = "Este campo es obligatorio.";
const min4Characters = "Debe tener mínimo 4 caracteres.";

export const createNade = createRouter().query("hello", {
  input: z.object({
    thrownFrom: z
      .string({
        required_error: required,
      })
      .min(4, { message: min4Characters }),
    endLocation: z
      .string({
        required_error: required,
      })
      .min(4, { message: min4Characters }),
    nadeType: z.string(),
    fromMap: z.string(),
  }),
  resolve({ input }) {
    return {};
  },
});
