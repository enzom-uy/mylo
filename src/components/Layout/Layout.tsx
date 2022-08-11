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
      <Navbar />
      <Flex px="1.5rem" gap="40px">
        {!isMobile && <Sidebar />}
        <Flex as="main" minH="100vh">
          {children}
        </Flex>
      </Flex>
      {isMobile && <MobileMenu />}
    </>
  );
};

export default Layout;
