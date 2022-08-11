import { Flex, Spinner, useBreakpoint } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
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
