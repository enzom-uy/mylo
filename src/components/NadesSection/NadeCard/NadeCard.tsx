import SimpleContainer from '@/components/SimpleContainer';
import { chakra, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Nade } from '@prisma/client';
import React from 'react';

export const ChakraIframe = chakra('iframe');

const NadeCard: React.FC<{ nade: Nade }> = ({ nade }) => {
  console.log(nade.gfycatUrl);
  return (
    <SimpleContainer bgColor={useColorModeValue('#fff', 'blue-gray')} p={0}>
      <Flex flexDir="column">
        <Flex alignItems="center" flexDir="column" py={2}>
          <Text fontWeight="bold">
            {nade.endLocation} {nade.nadeType}
          </Text>

          <Text fontWeight="medium">desde {nade.thrownFrom}</Text>
        </Flex>
        <Flex minWidth="300px" width="20vw" pb="35vh" position="relative">
          <ChakraIframe
            src={`${nade.gfycatUrl}/?autoplay=0`}
            allowFullScreen
            width="100%"
            height="100%"
            position="absolute"
            top={0}
            left={0}
          />
        </Flex>
      </Flex>
    </SimpleContainer>
  );
};

export default NadeCard;
