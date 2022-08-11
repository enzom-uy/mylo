import { Box, chakra, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useViewport from "src/hooks/useViewport";
import DrawerContainer from "./sidebar/DrawerContainer";
import SignWithGoogle from "./SignWithGoogle";
import myloLogo from "/public/navbar-logo.svg";

const Navbar: React.FC = () => {
  const isMobile = useViewport();
  return (
    <Flex
      as="nav"
      position="relative"
      alignItems="center"
      justifyContent="space-between"
      px={isMobile ? "16px" : "24px"}
      py={isMobile ? "8px" : "16px"}
    >
      <Link href="/">
        <Flex
          cursor="pointer"
          alignItems="center"
          gap={4}
          fontWeight="semibold"
          letterSpacing="wider"
          fontSize="1.5rem"
          bgGradient="linear(to-r, primary, secondary)"
          bgClip="text"
        >
          <Image
            src={myloLogo}
            alt="Logo de Mateo y los otros"
            layout="fixed"
            height={38}
            width={38}
            priority
          />
          Mylo
        </Flex>
      </Link>
      {isMobile && <SignWithGoogle />}
    </Flex>
  );
};

export default Navbar;
