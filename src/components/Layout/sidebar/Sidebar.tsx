import CustomButton from "@/components/CustomButton";
import SidebarContent from "@/components/Layout/sidebar/SidebarContent";
import SignWithGoogle from "@/components/Layout/SignWithGoogle";
import useViewport from "@/hooks/useViewport";
import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { FiUser } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";

const Sidebar: React.FC = () => {
  const { data: session, status } = useSession();
  const isMobile = useViewport();
  return (
    <Flex
      as="nav"
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
      <Flex flexDir="column" alignItems="center">
        {status === "loading" ? (
          <Spinner mb={5} />
        ) : !session ? (
          <SignWithGoogle />
        ) : (
          <>
            <CustomButton href="/account" text="Mi perfil" icon={FiUser} />
            <CustomButton
              href="/create-nade"
              text="Subir Nade"
              icon={IoIosAddCircleOutline}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
