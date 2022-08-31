import { Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const AccountInfoSkeleton: React.FC = () => {
  return (
    <>
      <SkeletonCircle size="100px" />
      <Flex flexDir="column" justifyContent="center" px={4} width="300px">
        <SkeletonText noOfLines={1} mt={4} />
        <SkeletonText noOfLines={1} mt={4} />
        <SkeletonText noOfLines={1} mt={4} />
      </Flex>
    </>
  );
};

export default AccountInfoSkeleton;
