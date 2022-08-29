import {
  Button,
  chakra,
  Flex,
  Link,
  ListItem,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import SimpleContainer from "../SimpleContainer";
import UpdateNade from "./UpdateNade";
import { AiOutlineCheck } from "react-icons/ai";
import { trpc } from "@/utils/trpc";

const Span = chakra("span");

const NadeItem: React.FC<{
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
}> = ({
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
  const toast = useToast();
  const bgColor = useColorModeValue("#fff", "blue-gray-transparent");

  const editNade = trpc.useMutation("editNade.edit");
  const approveNade = async () => {
    const { newNade } = await editNade.mutateAsync({ id: id, map: mapName });
    if (newNade) {
      toast({
        title: "Se ha aprobado la nade.",
        status: "success",
        position: "top",
        isClosable: true,
      });
      removeNadeFromList(id);
    }
    return newNade;
  };

  return (
    <SimpleContainer
      display="grid"
      as={ListItem}
      bgColor={bgColor}
      key={id}
      width="800px"
      boxShadow="baseline"
      gridTemplateColumns="1fr 1fr .4fr"
      padding=".8rem"
    >
      <Flex flexDir="column" justifyContent="space-between" maxW="250px">
        <Text>
          <Span fontWeight="bold">{thrownFrom}</Span> a{" "}
          <Span fontWeight="bold">{endLocation}</Span>
        </Text>
        <Text>
          Mapa: <Span fontWeight="bold">{mapName}</Span>
        </Text>
        <Text>
          Bando: <Span fontWeight="bold">{ttOrCt}</Span>
        </Text>
        <Text maxW="40ch">{description}</Text>

        <Link target="_blank" href={gfycatUrl} width="min-content" maxW="30ch">
          {gfycatUrl}
        </Link>
      </Flex>
      <Flex flexDir="column" justifyContent="center">
        <Text>
          Tickrate: <Span fontWeight="bold">{tickrate}</Span>
        </Text>
        <Text>
          Movement: <Span fontWeight="bold">{movement}</Span>
        </Text>
        <Text>
          Technique: <Span fontWeight="bold">{technique}</Span>
        </Text>
        <Text>
          NadeType: <Span fontWeight="bold">{nadeType}</Span>
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Button
          width="fit-content"
          leftIcon={<AiOutlineCheck fontSize="1.6rem" />}
          colorScheme="green"
          onClick={approveNade}
        >
          Aprobar
        </Button>
        <UpdateNade
          thrownFrom={thrownFrom}
          endLocation={endLocation}
          description={description}
          tickrate={tickrate}
          ttOrCt={ttOrCt}
          movement={movement}
          technique={technique}
          gfycatUrl={gfycatUrl}
          id={id}
          nadeType={nadeType}
          mapName={mapName}
          position={position}
          removeNadeFromList={removeNadeFromList}
        />
      </Flex>
    </SimpleContainer>
  );
};

export default NadeItem;
