import {
  chakra,
  Flex,
  Link,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SimpleContainer from "../SimpleContainer";
import UpdateNade from "./UpdateNade";

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
}) => {
  const bgColor = useColorModeValue("#fff", "blue-gray-transparent");

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
      />
    </SimpleContainer>
  );
};

export default NadeItem;
