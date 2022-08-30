import { ChakraNextImage } from "@/components/ChakraNextImage";
import NadeComponent from "@/components/nade/Nade";
import { Flex } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { AllMapsInfo } from "./[map]";

const YellowMark: React.FC<{ y: number; x: number }> = ({ y, x }) => {
  const newX = x - 5;
  const newY = y - 5;
  return (
    <Flex
      width="10px"
      height="10px"
      bgColor="yellow.300"
      position="absolute"
      top={newY}
      left={newX}
      rounded="full"
      border="2px"
      borderColor="black"
    ></Flex>
  );
};

export interface NadeInfo {
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
}
[];

const MapOverlay: React.FC<{
  img: StaticImageData | undefined;
  mapName: string | undefined;
  getNadePosition?: (pos: any) => void;
  allMapsInfo?: AllMapsInfo[];
  currentType?: "Smoke" | "Flash" | "Deto" | "Molo" | string;
  position?: string;
}> = ({
  img,
  mapName,
  getNadePosition,
  allMapsInfo,
  currentType,
  position,
}) => {
    const [nadePosition, setNadePosition] = useState(
      position
        ? JSON.parse(position)
        : {
          x: 0,
          y: 0,
        }
    );
    let parsedPosition;
    if (position) {
      parsedPosition = JSON.parse(position);
    }
    const [fakeNadePosition, setFakeNadePosition] = useState(
      parsedPosition ? parsedPosition : undefined
    );

    const [userClicked, setUserClicked] = useState(false);
    const [initialPosition, setInitialPosition] = useState(
      position ? JSON.parse(position) : {}
    );
    const [showNades, setShowNades] = useState(false);
    const [nades, setNades] = useState<NadeInfo[] | null>();

    useEffect(() => {
      if (getNadePosition) {
        getNadePosition(nadePosition);
      }
    }, [nadePosition]);

    useEffect(() => {
      if (allMapsInfo) {
        const infoAboutCurrentMap = allMapsInfo.filter(
          (map) => map.mapName === mapName
        )[0];
        if (infoAboutCurrentMap!.NadesInMap.length > 0) {
          setNades(
            infoAboutCurrentMap!.NadesInMap.filter(
              (nade) => nade.nadeType === currentType
            )
          );
          setShowNades(true);
        }
        if (infoAboutCurrentMap!.NadesInMap.length <= 0) {
          setNades(null);
          setShowNades(false);
        }
      }
    }, [currentType]);

    return (
      <Flex
        bgColor="#151515"
        maxW="824px"
        minW="824px"
        maxH="824px"
        minH="824px"
        rounded="lg"
        position="relative"
        userSelect="none"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const rect = target.getBoundingClientRect();

          if (getNadePosition) {
            const stateCopy = nadePosition;
            const prevPosition = position;
            const target = e.target as HTMLElement;
            const rect = target.getBoundingClientRect();
            const x = e.pageX - rect.x;
            const y = e.pageY - rect.y;
            setNadePosition({ ...stateCopy, x: x - 13, y: y - 15 });
            setFakeNadePosition({ prevPosition, x: x, y: y });
            getNadePosition(nadePosition);
            setUserClicked(true);
          }
          if (getNadePosition && position) {
            const stateCopy = nadePosition;
            const prevPosition = JSON.parse(position);
            const target = e.target as HTMLElement;
            const rect = target.getBoundingClientRect();
            const x = e.pageX - rect.x;
            const y = e.pageY - rect.y;
            setNadePosition({ ...stateCopy, x: x - 13.5, y: y - 130 });
            setFakeNadePosition({ ...prevPosition, x: x, y: y - 120 });
            getNadePosition(nadePosition);
            setUserClicked(true);
          }
        }}
      >
        <ChakraNextImage
          src={img!}
          rounded="lg"
          priority
          objectFit="contain"
          alt={`Imágen del rader del mapa ${mapName}`}
          draggable={false}
        />
        {userClicked && !position ? (
          <YellowMark y={fakeNadePosition.y} x={fakeNadePosition.x} />
        ) : undefined}
        {position && !userClicked ? (
          <YellowMark y={initialPosition.y + 14} x={initialPosition.x + 12} />
        ) : position && userClicked ? (
          <YellowMark y={fakeNadePosition.y} x={fakeNadePosition.x} />
        ) : undefined}
        {showNades &&
          nades?.map((nade) => {
            if (nade.position !== "") {
              return <NadeComponent nade={nade} />;
            }
          })}
      </Flex>
    );
  };

export default MapOverlay;
