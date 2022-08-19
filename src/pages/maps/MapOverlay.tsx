import { ChakraNextImage } from "@/components/ChakraNextImage";
import { Flex } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import React from "react";

const MapOverlay: React.FC<{ img: StaticImageData; map: string }> = ({
  img,
  map,
}) => {
  return (
    <Flex bgColor="#151515" maxW="800px" rounded="lg">
      <ChakraNextImage
        src={img}
        rounded="lg"
        priority
        objectFit="contain"
        alt={`Imágen del rader del mapa ${map}`}
      />
    </Flex>
  );
};

export default MapOverlay;
