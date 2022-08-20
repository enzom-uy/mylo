import * as z from "zod";

const tooSmallMsg = "Debe tener mínimo 4 letras.";
const required_error = "Campo obligatorio.";

export interface CreateNadeFormInputs {
  thrownFrom: string;
  endLocation: string;
  nadeType: "Smoke" | "Molo" | "Deto" | "Flash";
  fromMap:
    | "Mirage"
    | "Inferno"
    | "Dust 2"
    | "Vertigo"
    | "Nuke"
    | "Overpass"
    | "Tuscan";
  isOneWay: boolean;
  tickrate: "64" | "128";
  ttOrCt: "TT" | "CT";
  gfycatUrl: string;
  description: string | undefined;
  movement:
    | "Parado"
    | "Caminando"
    | "Corriendo"
    | "Agachado"
    | "Agachado moviéndose";
  technique:
    | "Clic izquierdo"
    | "Clic derecho"
    | "Izquierdo + Derecho"
    | "Jumpthrow"
    | "Jumpthrow + W"
    | "Jumpthrow + Izq y Der";
  position: string;
}

export const formSchema = z.object({
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
  movement: z.string({ required_error }),
  technique: z.string({ required_error }),
  description: z.string({ required_error }).optional(),
});
