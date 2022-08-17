import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import useViewport from "src/hooks/useViewport";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isMobile = useViewport();
  return (
    <>
      <Flex
        as="main"
        minH="90vh"
        pr={!isMobile ? "1.5rem" : undefined}
        pl={!isMobile ? "13.5rem" : undefined}
        gap="40px"
        justifyContent={!isMobile ? "flex-start" : "flex-start"}
        alignItems={isMobile ? "center" : undefined}
        width="100%"
        pt="5rem"
        flexDir="column"
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
