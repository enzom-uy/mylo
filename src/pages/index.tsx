import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import NadesSection from '@/components/NadesSection/NadesSection';
import { prisma } from '@/server/db/client';
import { Nade } from '@prisma/client';
const Home: NextPage<{ nades: Nade[] }> = ({ nades }) => {
  return (
    <>
      <Head>
        <title>Inicio | Mylo</title>
        <meta name="description" content="Inicio de Mylo" />
      </Head>

      <NadesSection nades={nades} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const newerNades = await prisma.nade.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 6,
  });

  return {
    props: {
      nades: JSON.parse(JSON.stringify(newerNades)),
    },
  };
};
