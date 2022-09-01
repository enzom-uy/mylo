import NadeForm from '@/components/Form/NadeForm';
import { getUser } from '@/services/database.services';
import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';
import { authOptions } from '../api/auth/[...nextauth]';

interface Props {
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: null;
    image: string;
    role: string;
  };
}

const Create: NextPage<Props> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Subir nueva nade | Mylo</title>
        <meta
          name="description"
          content="Formulario para subir una nueva nade."
        />
      </Head>

      <NadeForm user={user} />
    </>
  );
};

export default Create;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/?unauthenticated',
      },
    };
  }

  const userEmail = session?.user?.email;
  const userResponse = await getUser(userEmail as string);
  const user = userResponse[0];

  return {
    props: {
      user,
    },
  };
};
