import { ChakraNextImage } from "@/components/ChakraNextImage";
import { Flex } from "@chakra-ui/react";
import { ClickEvent } from "@szhsin/react-menu";
import { StaticImageData } from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";

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

const MapOverlay: React.FC<{
  img: StaticImageData | undefined;
  map: string | undefined;
  getNadePosition?: (pos: any) => void;
}> = ({ img, map, getNadePosition }) => {
  const [nadePosition, setNadePosition] = useState({
    x: 0,
    y: 0,
  });
  const [userClicked, setUserClicked] = useState(false);

  useEffect(() => {
    if (getNadePosition) {
      getNadePosition(nadePosition);
    }
  }, [nadePosition]);

  return (
    <Flex
      bgColor="#151515"
      maxW="600px"
      minW="600px"
      maxH="600px"
      minH="600px"
      rounded="lg"
      position="relative"
      onClick={(e) => {
        if (getNadePosition) {
          const stateCopy = nadePosition;
          const target = e.target as HTMLElement;
          const rect = target.getBoundingClientRect();
          const x = e.pageX - rect.left;
          const y = e.pageY - rect.top;
          setNadePosition({ ...stateCopy, x, y });
          getNadePosition(nadePosition);
          setUserClicked(true);
        } else return;
      }}
    >
      <ChakraNextImage
        src={img!}
        rounded="lg"
        priority
        objectFit="contain"
        alt={`Imágen del rader del mapa ${map}`}
      />
      {userClicked ? (
        <YellowMark y={nadePosition.y} x={nadePosition.x} />
      ) : undefined}
    </Flex>
  );
};

export default MapOverlay;
