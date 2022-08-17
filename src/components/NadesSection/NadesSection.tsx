import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../SectionTitle";
import NadeCard from "./NadeCard/NadeCard";

const NadesSection: React.FC = () => {
  const alignItems = useBreakpointValue({ base: "center", md: undefined });
  return (
    <Flex
      as="section"
      width={["95%", "95%", "95%", "100%"]}
      flexDirection="column"
      alignItems={alignItems}
    >
      <SectionTitle>Recién subidas</SectionTitle>
      <NadeCard />
    </Flex>
  );
};

export default NadesSection;
