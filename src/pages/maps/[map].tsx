import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { mapsPaths as paths } from "src/helpers/variables";

const Map: NextPage = () => {
  const router = useRouter();
  const isBrowser = typeof window !== undefined;
  const map = isBrowser && (router.query.map as string);
  const convertedMap =
    isBrowser && map && map.charAt(0).toUpperCase() + map.slice(1);
  return (
    <>
      <Head>
        <title>{map && convertedMap} Nades | Mylo</title>
      </Head>
      <div>{convertedMap}</div>
    </>
  );
};

export default Map;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
  };
};
