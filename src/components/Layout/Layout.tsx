import useViewport from "@/hooks/useViewport";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isMobile = useViewport();
  return (
    <>
      <Flex
        as="main"
        minH="90vh"
        pr={!isMobile ? "1.5rem" : "1rem"}
        pl={!isMobile ? "13.5rem" : "1rem"}
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
