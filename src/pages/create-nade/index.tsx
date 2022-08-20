import CreateNadeForm from "@/components/Form/CreateNadeForm";
import { getAllmaps, getAllNadeTypes } from "@/services/database.services";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";

interface Props {
  maps: { id: string; mapName: string; nadesInMap?: [{}] }[];
  nadeTypes: { typeName: string; nadesOfThisType?: {}[] | undefined }[];
}

const Create: NextPage<Props> = ({ maps, nadeTypes }) => {
  return (
    <>
      <Head>
        <title>Subir nueva nade | Mylo</title>
        <meta
          name="description"
          content="Formulario para subir una nueva nade."
        />
      </Head>
      <CreateNadeForm maps={maps} nadeTypes={nadeTypes} />
    </>
  );
};

export default Create;

export const getServerSideProps: GetServerSideProps = async () => {
  const maps = await getAllmaps();
  const nadeTypes = await getAllNadeTypes();

  return {
    props: {
      maps,
      nadeTypes,
    },
  };
};
