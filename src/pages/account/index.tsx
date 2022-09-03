import { Flex, useColorModeValue, Spinner } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';
import SimpleContainer from 'src/components/SimpleContainer';
import { authOptions } from '../api/auth/[...nextauth]';
import NadesList from '@/components/admin/NadesList';
import AccountInfoSkeleton from '@/components/account/AccountInfoSkeleton';
import useGetUser from '@/hooks/useGetUser';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const AccountInfoText = dynamic(
  () => import('@/components/account/AccountInfoText'),
  { suspense: true }
);

const EditAccountInfoForm = dynamic(
  () => import('@/components/account/EditAccountInfoForm'),
  { suspense: true }
);

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
        p={4}
      >
        {loading && !user ? (
          <AccountInfoSkeleton />
        ) : (
          <Flex flexDir="column" justifyContent="center" px={4} gap={2}>
            <Suspense fallback={<Spinner size="lg" />}>
              <AccountInfoText user={user} loading={loading} />
            </Suspense>

            <Suspense
              fallback={
                <Flex justifyContent="center" alignItems="center">
                  <Spinner size="md" />
                </Flex>
              }
            >
              <EditAccountInfoForm email={user?.email} name={user?.name} />
            </Suspense>
          </Flex>
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
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
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
