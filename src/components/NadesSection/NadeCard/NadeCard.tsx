import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import SimpleContainer from "../../SimpleContainer";

const NadeCard: React.FC = () => {
  return (
    <SimpleContainer bgColor={useColorModeValue("#fff", "blue-gray")}>
      <VStack>
        <Text>Dummy nade objective</Text>
        <Text>Dummy nade from</Text>
      </VStack>
    </SimpleContainer>
  );
};

export default NadeCard;
