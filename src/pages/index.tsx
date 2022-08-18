import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NadeCard from "src/components/NadesSection/NadeCard/NadeCard";
import NadesSection from "src/components/NadesSection/NadesSection";
import useViewport from "src/hooks/useViewport";
import getAllNades, { getNewerNades } from "src/services/getAllNades";
import { trpc } from "../utils/trpc";

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
  const sortedNades = await getNewerNades();
  console.log("All nades", nades);
  console.log("Sorted nades", sortedNades);
  return {
    props: {
      nades,
    },
  };
};
