import MySvg from '@/components/MapOverlay/SideMenu/MySvg';
import { mapsPaths as paths, nadeTypes } from '@/helpers/variables';
import useViewport from '@/hooks/useViewport';
import { AllMapsInfo } from '@/interfaces/maps';
import { getMapsWithNades } from '@/services/database.services';
import { Button, Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MapOverlay from './MapOverlay';
import Dust2 from '/public/mapsoverlays/dust2-overlay.jpg';
import Inferno from '/public/mapsoverlays/inferno-overlay.jpg';
import Mirage from '/public/mapsoverlays/mirage-overlay.jpg';
import Nuke from '/public/mapsoverlays/nuke-overlay.jpg';
import Overpass from '/public/mapsoverlays/overpass-overlay.jpg';
import Tuscan from '/public/mapsoverlays/tuscan-overlay.jpg';
import Vertigo from '/public/mapsoverlays/vertigo-overlay.jpg';

export const mapOverlays = [
  {
    name: 'Mirage',
    img: Mirage,
  },
  {
    name: 'Overpass',
    img: Overpass,
  },
  {
    img: Nuke,
    name: 'Nuke',
  },
  {
    img: Inferno,
    name: 'Inferno',
  },
  {
    img: Tuscan,
    name: 'Tuscan',
  },
  {
    img: Dust2,
    name: 'Dust2',
  },
  {
    img: Vertigo,
    name: 'Vertigo',
  },
];

const Map: NextPage<{
  allMapsInfo: AllMapsInfo[];
}> = ({ allMapsInfo }) => {
  const [selectedType, setSelectedType] = useState<
    'Deto' | 'Flash' | 'Molo' | 'Smoke' | string
  >('Smoke');
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
        flexDir={isMobile ? 'column' : 'row'}
        height="800px"
        width="100%"
        alignItems={isMobile ? 'center' : ''}
      >
        <Flex
          minHeight={isMobile ? '45px' : '600px'}
          maxHeight="600px"
          minWidth={isMobile ? '100%' : '50px'}
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
              flexDir={isMobile ? 'row' : 'column'}
              boxShadow="0 1px 3px 0px #484149"
              rounded="lg"
            >
              {sideMenuTypeOptions.map((option) => {
                const nadeType = option.typeName;
                return (
                  <Button
                    key={nadeType}
                    bgColor="transparent"
                    rounded="none"
                    isActive={selectedType === nadeType}
                    onClick={() => {
                      setSelectedType(nadeType);
                    }}
                    _first={{ roundedTop: 'lg' }}
                    _last={{ roundedBottom: 'lg', borderBottom: 'none' }}
                    borderBottom="1px"
                    maxWidth="40px"
                    px={0}
                  >
                    <MySvg type={nadeType} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const allMapsInfo = await getMapsWithNades();
  return {
    props: {
      allMapsInfo: JSON.parse(JSON.stringify(allMapsInfo)),
    },
    revalidate: 10,
  };
};
