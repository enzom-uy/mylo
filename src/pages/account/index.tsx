import { useColorModeValue } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import SimpleContainer from "src/components/SimpleContainer";
import { authOptions } from "../api/auth/[...nextauth]";

const Account: NextPage = () => {
  return (
    <>
      <Head>
        <title>Perfil | Mylo</title>
        <meta
          name="description"
          content="Mira y edita los datos de tu perfil."
        />
      </Head>
      <SimpleContainer bgColor={useColorModeValue("#fff", "blue-gray")}>
        Account
      </SimpleContainer>
    </>
  );
};

export default Account;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
