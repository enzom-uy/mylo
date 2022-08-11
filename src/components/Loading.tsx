import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Flex
      bgColor="#121212"
      minW="100%"
      minH="100%"
      position="absolute"
      zIndex="99"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};

export default Loading;
