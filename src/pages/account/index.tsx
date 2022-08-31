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
import Image from 'next/image';
import NadesList from '@/components/admin/NadesList';
import AccountInfoSkeleton from '@/components/account/AccountInfoSkeleton';
import useGetUser from '@/hooks/useGetUser';

const Account: NextPage<{ email: string }> = ({ email }) => {
  const { loading, user } = useGetUser(email);

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
      {loading && !user ? (
        <div>Cargando...</div>
      ) : (
        <NadesList user={user!} nades={user?.Nade!} />
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
  return {
    props: {
      email,
    },
  };
};
