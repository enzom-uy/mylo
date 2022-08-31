import CustomButton from "@/components/CustomButton";
import SidebarContent from "@/components/Layout/sidebar/SidebarContent";
import SignWithGoogle from "@/components/Layout/SignWithGoogle";
import useViewport from "@/hooks/useViewport";
import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FiUser } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Session } from "next-auth";

const Sidebar: React.FC<{
  session: Session | null | undefined
  status: string
  isAdmin: boolean
  checking: boolean
}> = ({ session, status, isAdmin, checking }) => {
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
            {checking === true ?
              <Spinner mb={5} mt={1} />
              : isAdmin && <CustomButton href="/admin" text="Admin" icon={RiAdminLine} />}
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
