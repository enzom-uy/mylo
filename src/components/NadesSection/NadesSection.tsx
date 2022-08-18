import SectionTitle from "@/components/SectionTitle";
import { FindAllNadesResponse } from "@/interfaces/nades";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface IProps {
  nades: FindAllNadesResponse[];
}

const NadesSection: React.FC<IProps> = ({ nades }) => {
  const alignItems = useBreakpointValue({ base: "center", md: undefined });

  return (
    <Flex
      as="section"
      width={["95%", "95%", "95%", "100%"]}
      flexDirection="column"
      alignItems={alignItems}
    >
      <SectionTitle>Recién subidas</SectionTitle>
    </Flex>
  );
};

export default NadesSection;
