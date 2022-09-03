import ColorToggler from '@/components/Layout/ColorToggler';
import SignWithGoogle from '@/components/Layout/SignWithGoogle';
import useViewport from '@/hooks/useViewport';
import { Flex } from '@chakra-ui/react';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import myloLogo from '/public/navbar-logo.svg';

const Navbar: React.FC<{ session: Session | null | undefined }> = ({
  session,
}) => {
  const isMobile = useViewport();
  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      px={isMobile ? '16px' : '24px'}
      py={isMobile ? '8px' : '16px'}
      userSelect="none"
      zIndex="99"
      backdropFilter="auto"
      backdropBlur="2px"
    >
      <Link href="/">
        <Flex
          cursor="pointer"
          alignItems="center"
          gap={4}
          fontWeight="semibold"
          letterSpacing="wider"
          fontSize="1.5rem"
          bgGradient="linear(to-r, primary, secondary)"
          bgClip="text"
        >
          <Image
            src={myloLogo}
            alt="Logo de Mateo y los otros"
            layout="fixed"
            height={38}
            width={38}
            priority
          />
          Mylo
        </Flex>
      </Link>
      <Flex gap={4}>
        {isMobile && !session && <SignWithGoogle />}
        <ColorToggler />
      </Flex>
    </Flex>
  );
};

export default React.memo(Navbar);
