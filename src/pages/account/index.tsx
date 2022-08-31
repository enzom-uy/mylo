import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';
import SimpleContainer from 'src/components/SimpleContainer';
import { authOptions } from '../api/auth/[...nextauth]';
import { prisma } from '@/server/db/client';
import { Nade, User } from '@prisma/client';
import Image from 'next/image';
import NadesList from '@/components/admin/NadesList';

interface NadeWithMapName extends Nade {
  map: {
    mapName: string;
  };
}

interface UserWithNades extends User {
  Nade: NadeWithMapName[];
}

const Account: NextPage<{ user: UserWithNades }> = ({ user }) => {
  const { name, role, email, image, Nade } = user;
  return (
    <>
      <Head>
        <title>Perfil | Mylo</title>
        <meta
          name="description"
          content="Mira y edita los datos de tu perfil."
        />
      </Head>
      <SimpleContainer
        bgColor={useColorModeValue('#fff', 'blue-gray')}
        boxShadow="light-shadow"
      >
        <Image
          priority
          src={image!}
          width="100%"
          height="100%"
          alt={`Foto de perfil de ${name}`}
        />
        <Flex flexDir="column" justifyContent="center" px={4}>
          <Text>{name}</Text>
          <Text>{role === 'ADMIN' ? 'Admin ☝🤓' : role}</Text>
          <Text>{email}</Text>
        </Flex>
      </SimpleContainer>
      <NadesList user={user} nades={Nade} />
    </>
  );
};

export default Account;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  const user = await prisma.user.findFirst({
    where: {
      email: session.user?.email,
    },
    include: {
      Nade: {
        include: {
          map: {
            select: { mapName: true },
          },
        },
      },
    },
  });
  return {
    props: {
      session,
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};
