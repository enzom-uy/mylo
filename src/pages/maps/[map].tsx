import MySvg from "@/components/MapOverlay/SideMenu/MySvg";
import { mapsPaths as paths, nadeTypes } from "@/helpers/variables";
import useViewport from "@/hooks/useViewport";
import { getAllMaps } from "@/services/database.services";
import { Button, Flex } from "@chakra-ui/react";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import Head from "next/head";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import MapOverlay from "./MapOverlay";
import Dust2 from "/public/mapsoverlays/dust2-overlay.jpg";
import Inferno from "/public/mapsoverlays/inferno-overlay.jpg";
import Mirage from "/public/mapsoverlays/mirage-overlay.jpg";
import Nuke from "/public/mapsoverlays/nuke-overlay.jpg";
import Overpass from "/public/mapsoverlays/overpass-overlay.jpg";
import Tuscan from "/public/mapsoverlays/tuscan-overlay.jpg";
import Vertigo from "/public/mapsoverlays/vertigo-overlay.jpg";

export const mapOverlays = [
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

export interface AllMapsInfo {
  NadesInMap: {
    map: {
      mapName: string;
    };
    user: {
      id: string;
      name: string | null;
    };
    description: string | null;
    thrownFrom: string;
    endLocation: string;
    movement: string;
    technique: string;
    tickrate: string;
    ttOrCt: string;
    votes: number;
    position: string;
    gfycatUrl: string;
    nadeType: string;
  }[];
  mapName: string;
  id: string;
}
[];

const Map: NextPage<{
  mapOverlays: { img: StaticImageData; name: string }[];
  allMapsInfo: AllMapsInfo[];
}> = ({ allMapsInfo }) => {
  const [selectedType, setSelectedType] = useState<
    "Deto" | "Flash" | "Molo" | "Smoke" | string
  >("Smoke");
  const router = useRouter();
  const isBrowser = typeof window !== undefined;
  const mapRouter = isBrowser && (router.query.map as string);
  const convertedMap =
    isBrowser &&
    mapRouter &&
    mapRouter.charAt(0).toUpperCase() + mapRouter.slice(1);

  const currentMap = mapOverlays.filter((map) => map.name === convertedMap);
  const img = currentMap[0]!.img;

  const isMobile = useViewport();
  const sideMenuTypeOptions = nadeTypes.filter((type) => type.svg);
  console.log(allMapsInfo);

  return (
    <>
      <Head>
        <title>{mapRouter && convertedMap} Nades | Mylo</title>
        <meta
          name="description"
          content={`Nades de ${mapRouter && convertedMap}`}
        />
      </Head>
      <Flex
        gap={5}
        flexDir={isMobile ? "column" : "row"}
        height="800px"
        width="100%"
        alignItems={isMobile ? "center" : ""}
      >
        <Flex
          minHeight={isMobile ? "45px" : "600px"}
          maxHeight="600px"
          minWidth={isMobile ? "100%" : "50px"}
          //   bgColor="red.500"
          rounded="lg"
        >
          <Flex
            flexDir="column"
            alignItems="center"
            fontSize=".8rem"
            fontWeight="semibold"
            letterSpacing="wider"
            gap={2}
          >
            TIPO
            <Flex
              flexDir={isMobile ? "row" : "column"}
              boxShadow="0 1px 3px 0px #484149"
              rounded="lg"
            >
              {sideMenuTypeOptions.map((option) => {
                const nadeType = option.typeName;
                return (
                  <Button
                    key={option.typeName}
                    bgColor="transparent"
                    rounded="none"
                    isActive={selectedType === option.typeName}
                    onClick={() => {
                      setSelectedType(option.typeName);
                    }}
                    _first={{ roundedTop: "lg" }}
                    _last={{ roundedBottom: "lg", borderBottom: "none" }}
                    borderBottom="1px"
                    maxWidth="40px"
                    px={0}
                  >
                    <MySvg type={option.typeName} />
                  </Button>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        <MapOverlay
          img={img}
          mapName={convertedMap as string}
          allMapsInfo={allMapsInfo}
          currentType={selectedType}
        />
      </Flex>
    </>
  );
};

export default Map;

export const getServerSideProps: GetServerSideProps = async () => {
  const allMapsInfo = await getAllMaps();

  return {
    props: {
      allMapsInfo: allMapsInfo,
    },
  };
};
