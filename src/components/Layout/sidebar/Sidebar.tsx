import { Box, Flex, List, useColorModeValue } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";

import NavbarLinks from "../NavbarLinks";
import SignWithGoogle from "../SignWithGoogle";
import SidebarContent from "./SidebarContent";

const Sidebar: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Flex as="aside" height="fit-content" flexDir="column" userSelect="none">
      <Flex
        flexDir="column"
        h="fit-content"
        rounded="8px"
        boxShadow="light-shadow"
        bgColor={useColorModeValue("#fff", "blue-gray-transparent")}
        backdropFilter="auto"
        mb="1rem"
      >
        <SidebarContent />
      </Flex>
      {!session && <SignWithGoogle />}
    </Flex>
  );
};

export default Sidebar;
