import SimpleContainer from "@/components/SimpleContainer";
import { NadeInfo } from "@/pages/maps/MapOverlay";
import { chakra, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

export const ChakraIframe = chakra("iframe");

const NadeCard: React.FC<{ nade: NadeInfo }> = ({ nade }) => {
  console.log(nade.gfycatUrl);
  return (
    <SimpleContainer bgColor={useColorModeValue("#fff", "blue-gray")}>
      <VStack>
        <Text>{nade.endLocation}</Text>
        <Text>{nade.thrownFrom}</Text>
        <ChakraIframe
          src={nade.gfycatUrl}
          allowFullScreen
          width="486px"
          height="317px"
        />
      </VStack>
    </SimpleContainer>
  );
};

export default NadeCard;
