import type { NextPage } from "next";
import Head from "next/head";
import NadeCard from "src/components/NadesSection/NadeCard/NadeCard";
import NadesSection from "src/components/NadesSection/NadesSection";
import useViewport from "src/hooks/useViewport";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Mylo</title>
        <meta name="description" content="Inicio de Mylo" />
      </Head>
      <NadesSection />
    </>
  );
};

export default Home;
