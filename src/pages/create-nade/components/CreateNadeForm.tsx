import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  maps: { id: string; mapName: string; nadesInMap?: [{}] }[];
  nadeTypes: { typeName: string; nadesOfThisType?: {}[] | undefined }[];
}

interface CreateNadeFormInputs {
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
  position: { x: number; y: number };
}

const tooSmallMsg = "Debe tener mínimo 4 letras.";
const required_error = "Campo obligatorio.";

const formSchema = z.object({
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
  // position: z.string({ required_error }),
});

const ChakraForm = chakra("form");

const CreateNadeForm: React.FC<Props> = ({ maps, nadeTypes }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CreateNadeFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: CreateNadeFormInputs) => {
    console.log(data);
  };

  return (
    <ChakraForm
      display="flex"
      flexDir="column"
      gap={2}
      maxW="600px"
      mb="6rem"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors?.fromMap?.message} isRequired>
        <FormLabel htmlFor="fromMap">Mapa</FormLabel>
        <Select placeholder="..." id="fromMap" {...register("fromMap")}>
          {maps?.map((map) => (
            <option key={map.id}>{map.mapName}</option>
          ))}
        </Select>
        <FormErrorMessage>
          {errors?.fromMap && errors?.fromMap?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.thrownFrom?.message} isRequired>
        <FormLabel htmlFor="thrownFrom">Desde</FormLabel>
        <Input
          type="text"
          id="thrownFrom"
          placeholder="Base CT"
          {...register("thrownFrom")}
        />
        <FormErrorMessage>
          {errors?.thrownFrom && errors?.thrownFrom?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.endLocation?.message} isRequired>
        <FormLabel htmlFor="endLocation">Destino</FormLabel>
        <Input
          type="text"
          id="endLocation"
          placeholder="Tapete"
          {...register("endLocation")}
        />
        <FormErrorMessage>
          {errors?.endLocation && errors?.endLocation?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.description?.message}>
        <FormLabel htmlFor="description">Descripción</FormLabel>
        <Input
          type="text"
          id="description"
          placeholder="Tapete"
          {...register("description")}
        />
        <FormErrorMessage>
          {errors?.description && errors?.description?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.nadeType?.message} isRequired>
        <FormLabel htmlFor="nadeType">Tipo</FormLabel>
        <Select placeholder="..." id="nadeType" {...register("nadeType")}>
          {nadeTypes?.map((nadeType) => (
            <option key={nadeType.typeName}>{nadeType.typeName}</option>
          ))}
        </Select>
        <FormErrorMessage>
          {errors?.nadeType && errors?.nadeType?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.ttOrCt?.message} isRequired>
        <FormLabel htmlFor="ttOrCt">TT o CT</FormLabel>
        <Select placeholder="..." id="ttOrCt" {...register("ttOrCt")}>
          <option>TT</option>
          <option>CT</option>
          <option>Ambos</option>
        </Select>
        <FormErrorMessage>
          {errors?.ttOrCt && errors?.ttOrCt?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.gfycatUrl?.message} isRequired>
        <FormLabel htmlFor="gfycatUrl">Link de Gfycat</FormLabel>
        <Input type="url" id="gfycatUrl" {...register("gfycatUrl")} />
        <FormErrorMessage>
          {errors?.gfycatUrl && errors?.gfycatUrl?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.movement?.message} isRequired>
        <FormLabel htmlFor="movement">Movimiento</FormLabel>
        <Select placeholder="..." id="movement" {...register("movement")}>
          <option>Parado</option>
          <option>Caminando</option>
          <option>Corriendo</option>
          <option>Agachado</option>
          <option>Agachado moviéndose</option>
        </Select>
        <FormErrorMessage>
          {errors?.movement && errors?.movement?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors?.technique?.message} isRequired>
        <FormLabel htmlFor="technique">Movimiento</FormLabel>
        <Select placeholder="..." id="technique" {...register("technique")}>
          <option>Clic izquierdo</option>
          <option>Clic derecho</option>
          <option>Izquierdo + Derecho</option>
          <option>Jumpthrow</option>
          <option>Jumpthrow + W/A/S/D</option>
          <option>Jumpthrow + Izq y Der</option>
        </Select>
        <FormErrorMessage>
          {errors?.technique && errors?.technique?.message}
        </FormErrorMessage>
      </FormControl>

      <Button type="submit" isLoading={isSubmitting}>
        Submit
      </Button>
    </ChakraForm>
  );
};

export default CreateNadeForm;
