import { Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ferre from "/public/404.gif";

const Custom500: React.FC = () => {
  return (
    <Flex
      position="absolute"
      top="0"
      left="0"
      bgColor="#000"
      minH="100vh"
      minW="100vw"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      gap={4}
    >
      <Heading
        color="white"
        fontFamily="inherit"
        letterSpacing="wide"
        fontWeight="light"
        size="md"
      >
        Esta página no existe.
      </Heading>
      <Image src={ferre} alt="NiFerreyra haciendo magia" priority={true} />
      <Link href="/">
        <ChakraLink
          _hover={{ textDecoration: "none", color: "secondary" }}
          color="primary"
          fontFamily="inherit"
          letterSpacing="wide"
          fontSize="1.2rem"
        >
          Volver al inicio
        </ChakraLink>
      </Link>
    </Flex>
  );
};

export default Custom500;
