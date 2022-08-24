import NadesSection from "@/components/NadesSection/NadesSection";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const Home: NextPage<{ nades: any[] }> = ({}) => {
  return (
    <>
      <Head>
        <title>Inicio | Mylo</title>
        <meta name="description" content="Inicio de Mylo" />
      </Head>
    </>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {},
  };
};
