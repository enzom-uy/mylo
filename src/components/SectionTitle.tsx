import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const SectionTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Heading
      size="md"
      fontFamily="inherit"
      letterSpacing="wider"
      fontWeight="semibold"
      mb="1rem"
    >
      {children}
    </Heading>
  );
};

export default SectionTitle;
