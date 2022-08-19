import { ChakraNextImage } from "@/components/ChakraNextImage";
import { Flex } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import React from "react";

const MapOverlay: React.FC<{ img: StaticImageData }> = ({ img }) => {
  return (
    <Flex maxWidth="800px">
      <ChakraNextImage src={img} rounded="xl" priority />
    </Flex>
  );
};

export default MapOverlay;
