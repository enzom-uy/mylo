import { nadeTypes, navbarLinks } from "@/helpers/variables";
import { CreateNadeFormInputs, formSchema } from "@/schemas/formSchema";
import { trpc } from "@/utils/trpc";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ChakraForm } from "./ChakraForm";
import MovementOptions from "./MovementOptions";
import SetNadePosition from "./SetNadePosition";
import TechniquesOptions from "./TechniquesOptions";

interface Props {
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: null;
    image: string;
    role: string;
  };
}

const CreateNadeForm: React.FC<Props> = ({ user }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreateNadeFormInputs>({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
  });
  const [selectedMap, setSelectedMap] = useState("");
  const [nType, setNType] = useState("");
  const [nadePosition, setNadePosition] = useState("");
  const toast = useToast();
  const toastIdRef = React.useRef<ToastId | undefined>();

  const createNade = trpc.useMutation("createNade.create", {
    async onSuccess() {
      console.log("Success");
    },
  });

  useEffect(() => {
    setNadePosition("");
  }, [selectedMap]);

  const getNadePosition = (pos: { x: number; y: number }) => {
    const position = JSON.stringify(pos);
    if (position !== '{"x":0,"y":0}') {
      setNadePosition(JSON.stringify(pos));
    }
  };

  const nadeHasPosition =
    nadePosition !== '{"x":0,"y":0}' &&
    nadePosition !== "" &&
    nadePosition !== undefined;
  const noErrors = Object.entries(errors).length === 0;

  const activeMap = navbarLinks.filter((map) => {
    return map.title === selectedMap;
  })[0];

  const activeNadeType = nadeTypes.filter((type) => {
    return type.typeName === nType;
  })[0];

  const onSubmit = async (data: CreateNadeFormInputs) => {
    const newData = {
      ...data,
      user,
      map: activeMap!.title,
      nadeType: activeNadeType!.typeName,
      position: nadePosition,
    };
    toastIdRef.current = toast({
      title: "Subiendo la nade...",
      description: "Un momento.",
      status: "loading",
      position: "top",
      isClosable: true,
    });
    const { error, message, newNade, status } = await createNade.mutateAsync(
      newData
    );

    if (error) {
      console.log(error);
      toast.close(toastIdRef.current);
      toast({
        title: "Ha ocurrido un error.",
        description: message,
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
    if (newNade) {
      toast.close(toastIdRef.current);
      toast({
        title: "Se ha subido la nade.",
        status: "success",
        position: "top",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <ChakraForm
        display="flex"
        flexDir="column"
        gap={2}
        maxW="600px"
        mb="6rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isInvalid={!!errors?.map?.message} isRequired>
          <FormLabel htmlFor="map">Mapa</FormLabel>
          <Select
            placeholder="..."
            id="map"
            {...register("map")}
            onChange={(e) => setSelectedMap(e.target.value)}
          >
            {navbarLinks.map((map) => (
              <option key={map.title}>{map.title}</option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors?.map && errors?.map?.message}
          </FormErrorMessage>
        </FormControl>

        <SetNadePosition
          selectedMap={selectedMap}
          getNadePosition={getNadePosition}
          disabled={!selectedMap ? true : false}
          nadeHasPosition={nadeHasPosition}
        />

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
          <Select
            placeholder="..."
            id="nadeType"
            {...register("nadeType")}
            onChange={(e) => setNType(e.target.value)}
          >
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

        <FormControl isInvalid={!!errors?.movement?.message} isRequired>
          <FormLabel htmlFor="movement">Movimiento</FormLabel>
          <Select placeholder="..." id="movement" {...register("movement")}>
            <MovementOptions />
          </Select>
          <FormErrorMessage>
            {errors?.movement && errors?.movement?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors?.technique?.message} isRequired>
          <FormLabel htmlFor="technique">Técnica</FormLabel>
          <Select placeholder="..." id="technique" {...register("technique")}>
            <TechniquesOptions />
          </Select>
          <FormErrorMessage>
            {errors?.technique && errors?.technique?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors?.gfycatUrl?.message} isRequired>
          <FormLabel htmlFor="gfycatUrl">Link de Gfycat</FormLabel>
          <Input
            type="url"
            id="gfycatUrl"
            {...register("gfycatUrl")}
            placeholder="https://gfycat.com/..."
          />
          <FormErrorMessage>
            {errors?.gfycatUrl && errors?.gfycatUrl?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          bgColor="primary"
          _hover={{ bgColor: "primary-light" }}
          isLoading={isSubmitting}
          isDisabled={
            nadeHasPosition && isValid && selectedMap !== "" && noErrors
              ? false
              : true
          }
          color="white"
        >
          {!isValid && "El formulario está incompleto o tiene errores."}
          {!nadeHasPosition &&
            isValid &&
            noErrors &&
            "Elige una posición para la nade."}
          {nadeHasPosition && selectedMap === "" && "Vuelve a elegir un mapa"}
          {isValid &&
            nadeHasPosition &&
            selectedMap !== "" &&
            noErrors &&
            "Subir nade"}
        </Button>
      </ChakraForm>
    </>
  );
};

export default CreateNadeForm;
