import { useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import SimpleContainer from "src/components/SimpleContainer";

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
