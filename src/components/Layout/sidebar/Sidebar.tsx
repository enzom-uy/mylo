import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import useViewport from "src/hooks/useViewport";
import AccountButton from "../../CustomButton";
import SignWithGoogle from "../SignWithGoogle";
import SidebarContent from "./SidebarContent";

const Sidebar: React.FC = () => {
  const { data: session } = useSession();
  const isMobile = useViewport();
  return (
    <Flex
      as="aside"
      position="absolute"
      top="5rem"
      left="1.5rem"
      height="fit-content"
      flexDir="column"
      userSelect="none"
      display={isMobile ? "none" : ""}
    >
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
      {!session ? <SignWithGoogle /> : <AccountButton />}
    </Flex>
  );
};

export default Sidebar;
