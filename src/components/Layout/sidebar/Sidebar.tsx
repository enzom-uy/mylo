import { Box, Flex, List } from "@chakra-ui/react";
import React from "react";

import NavbarLinks from "../NavbarLinks";
import SignWithGoogle from "../SignWithGoogle";
import SidebarContent from "./SidebarContent";

const Sidebar: React.FC = () => {
  return (
    <Flex as="aside" height="fit-content" flexDir="column">
      <Flex
        flexDir="column"
        h="fit-content"
        rounded="8px"
        boxShadow="light-shadow"
        bgColor="#fff"
        mb="1rem"
      >
        <SidebarContent />
      </Flex>
      <SignWithGoogle />
    </Flex>
  );
};

export default Sidebar;
