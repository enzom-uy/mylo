import { maps, nadeTypes, navbarLinks } from "@/helpers/variables";
import { CreateNadeFormInputs, formSchema } from "@/schemas/formSchema";
import { trpc } from "@/utils/trpc";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ChakraForm } from "../Form/ChakraForm";
import MovementOptions from "../Form/MovementOptions";
import SetNadePosition from "../Form/SetNadePosition";
import TechniquesOptions from "../Form/TechniquesOptions";

interface Props {
  id: string;
  thrownFrom: string;
  endLocation: string;
  mapName: string;
  ttOrCt: string;
  description: string | null;
  gfycatUrl: string;
  tickrate: string;
  movement: string;
  technique: string;
  nadeType: string;
  position: string;
  removeNadeFromList: (nadeId: string) => void;
}

const NadeForm: React.FC<Props> = ({
  id,
  thrownFrom,
  endLocation,
  mapName,
  ttOrCt,
  description,
  gfycatUrl,
  tickrate,
  movement,
  technique,
  nadeType,
  position,
  removeNadeFromList,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateNadeFormInputs>({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
  });
  const [selectedMap, setSelectedMap] = useState(mapName);
  const [nType, setNType] = useState(nadeType);
  const [newTickrate, setNewTickrate] = useState(tickrate);
  const [newNadePosition, setNadePosition] = useState(position);
  const [newThrownFrom, setNewThrownFrom] = useState(thrownFrom);
  const [newEndLocation, setNewEndLocation] = useState(endLocation);
  const [newTtOrCt, setNewTtOrCt] = useState(ttOrCt);
  const [newDescription, setNewDescription] = useState(description);
  const [newGfycatUrl, setNewGfycatUrl] = useState(gfycatUrl);
  const [newMovement, setNewMovement] = useState(movement);
  const [newTechnique, setNewTechnique] = useState(technique);
  const toast = useToast();
  const toastIdRef = React.useRef<ToastId | undefined>();

  const trpcEditNade = trpc.useMutation("nade.edit");

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
    newNadePosition !== '{"x":0,"y":0}' &&
    newNadePosition !== "" &&
    newNadePosition !== undefined;

  const activeMap = navbarLinks.filter((map) => {
    return map.title === selectedMap;
  })[0];

  const activeNadeType = nadeTypes.filter((type) => {
    return type.typeName === nType;
  })[0];

  const onSubmit = async (data: CreateNadeFormInputs) => {
    const gfycatUrl = data.gfycatUrl;
    const gfycatId = gfycatUrl.split("/").pop();
    const newGfycatUrl = `https://gfycat.com/ifr/${gfycatId}`;
    const newData = {
      ...data,
      map: activeMap!.title,
      nadeType: activeNadeType!.typeName,
      position: newNadePosition,
      tickrate: newTickrate,
      gfycatUrl: newGfycatUrl,
      id: id,
    };
    toastIdRef.current = toast({
      title: "Actualizando la nade",
      description: "Un momento...",
      status: "loading",
      position: "top",
      isClosable: true,
    });

    const { newNade } = await trpcEditNade.mutateAsync(newData);
    if (newNade) {
      toast.close(toastIdRef.current);
      reset();
      toast({
        title: "Se ha actualizado la nade.",
        status: "success",
        position: "top",
        isClosable: true,
      });
      removeNadeFromList(id);
    }
  };

  return (
    <>
      <ChakraForm
        display="flex"
        flexDir="column"
        gap={2}
        width="600px"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex justifyContent="space-between">
          <Flex flexDir="column" gap={3}>
            <FormControl isInvalid={!!errors?.map?.message}>
              <FormLabel htmlFor="map">Mapa</FormLabel>
              <Select
                placeholder="Elige un mapa"
                id="map"
                {...register("map")}
                onChange={(e) => setSelectedMap(e.target.value)}
                value={selectedMap}
              >
                {maps.map((map) => (
                  <option key={map.title}>{map.title}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors?.map && errors?.map?.message}
              </FormErrorMessage>
            </FormControl>
            {activeMap && (
              <SetNadePosition
                selectedMap={selectedMap}
                getNadePosition={getNadePosition}
                nadeHasPosition={nadeHasPosition}
                position={position}
              />
            )}

            <FormControl isInvalid={!!errors?.thrownFrom?.message}>
              <FormLabel htmlFor="thrownFrom">Desde</FormLabel>
              <Input
                type="text"
                id="thrownFrom"
                placeholder="Base CT"
                {...register("thrownFrom")}
                onChange={(e) => setNewThrownFrom(e.target.value)}
                value={newThrownFrom}
              />
              <FormErrorMessage>
                {errors?.thrownFrom && errors?.thrownFrom?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors?.endLocation?.message}>
              <FormLabel htmlFor="endLocation">Destino</FormLabel>
              <Input
                type="text"
                id="endLocation"
                placeholder="Tapete"
                {...register("endLocation")}
                onChange={(e) => setNewEndLocation(e.target.value)}
                value={newEndLocation}
              />
              <FormErrorMessage>
                {errors?.endLocation && errors?.endLocation?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.description?.message}>
              <FormLabel htmlFor="description">Descripción</FormLabel>
              <Textarea
                id="description"
                placeholder="..."
                {...register("description")}
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription as string}
              />
              <FormErrorMessage>
                {errors?.description && errors?.description?.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex flexDir="column" gap={3}>
            <FormControl isInvalid={!!errors?.tickrate?.message}>
              <FormLabel htmlFor="tickrate">Tickrate</FormLabel>
              <Select
                placeholder="..."
                id="tickrate"
                {...register("tickrate")}
                onChange={(e) => setNewTickrate(e.target.value)}
                value={newTickrate}
              >
                <option>128</option>
                <option>64</option>
                <option>Ambos</option>
              </Select>
              <FormErrorMessage>
                {errors?.tickrate && errors?.tickrate?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors?.nadeType?.message}>
              <FormLabel htmlFor="nadeType">Tipo</FormLabel>
              <Select
                placeholder="..."
                id="nadeType"
                {...register("nadeType")}
                onChange={(e) => setNType(e.target.value)}
                value={nType}
              >
                {nadeTypes?.map((nadeType) => (
                  <option key={nadeType.typeName}>{nadeType.typeName}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors?.nadeType && errors?.nadeType?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors?.ttOrCt?.message}>
              <FormLabel htmlFor="ttOrCt">TT o CT</FormLabel>
              <Select
                placeholder="..."
                id="ttOrCt"
                {...register("ttOrCt")}
                onChange={(e) => setNewTtOrCt(e.target.value)}
                value={newTtOrCt}
              >
                <option>TT</option>
                <option>CT</option>
                <option>Ambos</option>
              </Select>
              <FormErrorMessage>
                {errors?.ttOrCt && errors?.ttOrCt?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors?.movement?.message}>
              <FormLabel htmlFor="movement">Movimiento</FormLabel>
              <Select
                placeholder="..."
                id="movement"
                {...register("movement")}
                onChange={(e) => setNewMovement(e.target.value)}
                value={newMovement}
              >
                <MovementOptions />
              </Select>
              <FormErrorMessage>
                {errors?.movement && errors?.movement?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors?.technique?.message}>
              <FormLabel htmlFor="technique">Técnica</FormLabel>
              <Select
                placeholder="..."
                id="technique"
                {...register("technique")}
                onChange={(e) => setNewTechnique(e.target.value)}
                value={newTechnique}
              >
                <TechniquesOptions />
              </Select>
              <FormErrorMessage>
                {errors?.technique && errors?.technique?.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </Flex>
        <FormControl isInvalid={!!errors?.gfycatUrl?.message}>
          <FormLabel htmlFor="gfycatUrl">Link de Gfycat</FormLabel>
          <Input
            type="url"
            id="gfycatUrl"
            {...register("gfycatUrl")}
            placeholder="https://gfycat.com/..."
            onChange={(e) => setNewGfycatUrl(e.target.value)}
            value={newGfycatUrl}
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
          color="white"
        >
          Aprobar nade
        </Button>
      </ChakraForm>
    </>
  );
};

export default NadeForm;
