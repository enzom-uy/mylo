import type { NextPage } from "next";
import Head from "next/head";
import MobileMenu from "src/components/Layout/MobileMenu";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Inicio | Mylo</title>
        <meta name="description" content="Inicio de Mylo" />
      </Head>

      <p>Index page</p>
    </>
  );
};

export default Home;
