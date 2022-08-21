import NadesSection from "@/components/NadesSection/NadesSection";
import { getAllNades } from "@/services/database.services";
import { Text } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const Home: NextPage<{ nades: any[] }> = ({ nades }) => {
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
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const nades = await getAllNades();
  console.log(nades);
  return {
    props: {
      nades,
    },
  };
};
