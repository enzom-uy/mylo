import NadesSection from "@/components/NadesSection/NadesSection";
import { getAllNades } from "@/services/database.services";
import { trpc } from "@/utils/trpc";
import { Nade } from "@prisma/client";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage<{ nades: any[] }> = ({}) => {
  const [granadas, setNades] = useState<Nade[]>();
  const getNades = trpc.useMutation("getNades.getAllNades", {
    async onSuccess() {
      console.log("Success");
    },
  });

  useEffect(() => {
    async function getAllNades() {
      const nades = await getNades.mutateAsync({ typeOrAll: "detos" });
      setNades(nades);
      console.log(granadas);
    }
    getAllNades();
  }, []);

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
