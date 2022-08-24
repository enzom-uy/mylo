import { chakra, Flex } from "@chakra-ui/react";

const SimpleContainer = chakra(Flex, {
  baseStyle: {
    bgColor: "#fff",
    fontFamily: "inherit",
    width: "fit-content",
    rounded: "lg",
    p: 2,
  },
});

export default SimpleContainer;
