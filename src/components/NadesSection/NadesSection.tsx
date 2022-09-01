import SectionTitle from '@/components/SectionTitle';
import { Flex, Grid, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { Nade } from '@prisma/client';
import React from 'react';
import NadeCard from './NadeCard/NadeCard';

interface IProps {
  nades: Nade[];
}

const NadesSection: React.FC<IProps> = ({ nades }) => {
  const alignItems = useBreakpointValue({ base: 'center', md: undefined });
  const justifyContent = useBreakpointValue({ base: 'center', md: undefined });
  console.log(nades);

  return (
    <Flex
      as="section"
      width={['95%', '95%', '95%', '100%']}
      flexDirection="column"
      alignItems={alignItems}
    >
      <SectionTitle>Recién subidas</SectionTitle>

      <Flex flexWrap="wrap" gap={4} justifyContent={justifyContent}>
        {nades.map((nade) => (
          <NadeCard key={nade.id} nade={nade} />
        ))}
      </Flex>
    </Flex>
  );
};

export default NadesSection;
