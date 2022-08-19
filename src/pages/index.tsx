import NadesSection from "@/components/NadesSection/NadesSection";
import { getAllNades } from "@/services/database.services";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const Home: NextPage<{ nades: any }> = ({ nades }) => {
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
export const getServerSideProps: GetServerSideProps = async () => {
  const nades = await getAllNades();

  return {
    props: {
      nades,
    },
  };
};
