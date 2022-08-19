import SectionTitle from "@/components/SectionTitle";
import { mapsPaths as paths } from "@/helpers/variables";
import useViewport from "@/hooks/useViewport";
import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MapOverlay from "./MapOverlay";
import Dust2 from "/public/mapsoverlays/dust2-overlay.jpg";
import Inferno from "/public/mapsoverlays/inferno-overlay.jpg";
import Mirage from "/public/mapsoverlays/mirage-overlay.jpg";
import Nuke from "/public/mapsoverlays/nuke-overlay.jpg";
import Overpass from "/public/mapsoverlays/overpass-overlay.jpg";
import Tuscan from "/public/mapsoverlays/tuscan-overlay.jpg";
import Vertigo from "/public/mapsoverlays/vertigo-overlay.jpg";

const mapOverlays = [
  {
    name: "Mirage",
    img: Mirage,
  },
  {
    name: "Overpass",
    img: Overpass,
  },
  {
    img: Nuke,
    name: "Nuke",
  },
  {
    img: Inferno,
    name: "Inferno",
  },
  {
    img: Tuscan,
    name: "Tuscan",
  },
  {
    img: Dust2,
    name: "Dust2",
  },
  {
    img: Vertigo,
    name: "Vertigo",
  },
];

const Map: NextPage = () => {
  const router = useRouter();
  const isBrowser = typeof window !== undefined;
  const map = isBrowser && (router.query.map as string);
  const convertedMap =
    isBrowser && map && map.charAt(0).toUpperCase() + map.slice(1);

  const currentMap = mapOverlays.filter((map) => map.name === convertedMap);
  const img = currentMap[0]!.img;

  const isMobile = useViewport();

  return (
    <>
      <Head>
        <title>{map && convertedMap} Nades | Mylo</title>
        <meta name="description" content={`Nades de ${map && convertedMap}`} />
      </Head>
      <Flex
        gap={5}
        flexDir={isMobile ? "column" : "row"}
        height="800px"
        width="100%"
      >
        <Flex
          minHeight={isMobile ? "50px" : "400px"}
          minWidth={isMobile ? "100%" : "50px"}
          bgColor="red.500"
          rounded="lg"
        ></Flex>
        <MapOverlay img={img} map={convertedMap as string} />
      </Flex>
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
