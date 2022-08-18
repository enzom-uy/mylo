import { chakra, Flex } from "@chakra-ui/react";

const SimpleContainer = chakra(Flex, {
  baseStyle: {
    bgColor: "#fff",
    fontFamily: "inherit",
    width: "fit-content",
  },
});

export default SimpleContainer;
