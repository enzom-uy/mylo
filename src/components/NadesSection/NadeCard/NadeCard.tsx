import SimpleContainer from "@/components/SimpleContainer";
import { chakra, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

interface IProps {
  to: string;
  from: string;
  src: string;
}

const ChakraIframe = chakra("iframe");

const NadeCard: React.FC<IProps> = ({ to, from, src }) => {
  return (
    <SimpleContainer bgColor={useColorModeValue("#fff", "blue-gray")}>
      <VStack>
        <Text>{to}</Text>
        <Text>{from}</Text>
        <ChakraIframe
          src="https://gfycat.com/ifr/TimelyIllegalHyracotherium"
          allowFullScreen
          width="486px"
          height="317px"
        />
      </VStack>
    </SimpleContainer>
  );
};

export default NadeCard;
