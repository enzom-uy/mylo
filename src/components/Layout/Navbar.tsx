import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useViewport from "src/hooks/useViewport";
import ColorToggler from "./ColorToggler";
import SignWithGoogle from "./SignWithGoogle";
import myloLogo from "/public/navbar-logo.svg";

const Navbar: React.FC = () => {
  const isMobile = useViewport();
  const { data: session } = useSession();
  return (
    <Flex
      as="nav"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      px={isMobile ? "16px" : "24px"}
      py={isMobile ? "8px" : "16px"}
      userSelect="none"
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
      <Flex gap={4}>
        {isMobile && !session && <SignWithGoogle />}
        <ColorToggler />
      </Flex>
    </Flex>
  );
};

export default React.memo(Navbar);
