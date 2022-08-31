import {
  Flex,
  Text,
  useColorModeValue,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';
import SimpleContainer from 'src/components/SimpleContainer';
import { authOptions } from '../api/auth/[...nextauth]';
import { Nade, User } from '@prisma/client';
import Image from 'next/image';
import NadesList from '@/components/admin/NadesList';
import { trpc } from '@/utils/trpc';
import { useEffect, useState } from 'react';
import AccountInfoSkeleton from '@/components/account/AccountInfoSkeleton';

interface NadeWithMapName extends Nade {
  map: {
    mapName: string;
  };
}

interface UserWithNades extends User {
  Nade: NadeWithMapName[];
}

const Account: NextPage<{ user: UserWithNades; email: string }> = ({
  email,
}) => {
  /* const { name, role, email, image, Nade } = user; */
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserWithNades>();
  const trpcGetUser = trpc.useMutation('user.getUser');

  useEffect(() => {
    async function getUser() {
      const user = (await trpcGetUser.mutateAsync({
        email: email,
      })) as UserWithNades;
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, []);

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
        alignItems="center"
      >
        {loading && !user ? (
          <AccountInfoSkeleton />
        ) : (
          <>
            <SkeletonCircle size="100px" isLoaded={!loading} fadeDuration={1}>
              <Image
                priority
                src={user?.image!}
                width="100%"
                height="100%"
                alt={`Foto de perfil de ${user?.name}`}
                style={{ borderRadius: '100%' }}
              />
            </SkeletonCircle>
            <Flex flexDir="column" justifyContent="center" px={4}>
              <SkeletonText
                noOfLines={1}
                spacing="4"
                isLoaded={!loading}
                fadeDuration={1}
              >
                <Text>{user?.name}</Text>
              </SkeletonText>
              <SkeletonText
                noOfLines={1}
                spacing="4"
                isLoaded={!loading}
                fadeDuration={1}
              >
                <Text>
                  {user?.role === 'ADMIN' ? 'Admin ☝🤓' : user?.role}
                </Text>
              </SkeletonText>
              <SkeletonText
                noOfLines={1}
                spacing="4"
                isLoaded={!loading}
                fadeDuration={1}
              >
                <Text>{user?.email}</Text>
              </SkeletonText>
            </Flex>
          </>
        )}
      </SimpleContainer>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <NadesList user={user} nades={user?.Nade!} />
      )}
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
  const email = session.user?.email;
  /* const user = await prisma.user.findFirst({ */
  /*   where: { */
  /*     email: session.user?.email, */
  /*   }, */
  /*   include: { */
  /*     Nade: { */
  /*       include: { */
  /*         map: { */
  /*           select: { mapName: true }, */
  /*         }, */
  /*       }, */
  /*     }, */
  /*   }, */
  /* }); */
  return {
    props: {
      email,
      /* user: JSON.parse(JSON.stringify(user)), */
    },
  };
};
