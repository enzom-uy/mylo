import CreateNadeForm from "@/components/Form/CreateNadeForm";
import {
  getAllmaps,
  getAllNadeTypes,
  getUser,
} from "@/services/database.services";
import { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import Head from "next/head";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";

interface Props {
  maps: { id: string; mapName: string; nadesInMap?: [{}] }[];
  nadeTypes: { typeName: string; nadesOfThisType?: {}[] | undefined }[];
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: null;
    image: string;
    role: string;
  };
}

const Create: NextPage<Props> = ({ maps, nadeTypes, user }) => {
  return (
    <>
      <Head>
        <title>Subir nueva nade | Mylo</title>
        <meta
          name="description"
          content="Formulario para subir una nueva nade."
        />
      </Head>
      <CreateNadeForm user={user} />
    </>
  );
};

export default Create;

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

  const userEmail = session?.user?.email;
  const userResponse = await getUser(userEmail as string);
  const user = userResponse[0];

  return {
    props: {
      user,
    },
  };
};
