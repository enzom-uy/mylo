import NadeCard, {
  ChakraIframe,
} from "@/components/NadesSection/NadeCard/NadeCard";
import { NadeInfo } from "@/pages/maps/MapOverlay";
import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import MySvg from "../MapOverlay/SideMenu/MySvg";
import NadeInfoText from "./NadeInfo";

const NadeComponent: React.FC<{ nade: NadeInfo }> = ({ nade }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const coordinates = JSON.parse(nade?.position);
  return (
    <>
      <Flex
        key={nade.gfycatUrl}
        position="absolute"
        top={coordinates.y}
        left={coordinates.x}
        cursor="pointer"
        onClick={onOpen}
      >
        <MySvg type={nade.nadeType} />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="300px" width="60vw" maxW="none" height="80%">
          <ModalHeader>
            {nade.nadeType} desde {nade.thrownFrom} a {nade.endLocation}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexDir="column"
              height="100%"
              bgColor={useColorModeValue("#fff", "#15181c")}
              rounded="lg"
              position="relative"
            >
              <Box
                display="grid"
                gridTemplateColumns="repeat(5, 1fr)"
                justifyContent="center"
                alignItems="center"
                gap="4rem"
                px={4}
                py={2}
                textAlign="center"
                width="100%"
              >
                <NadeInfoText title="Tipo" content={nade.nadeType} />
                <NadeInfoText title="Tickrate" content={nade.tickrate} />
                <NadeInfoText title="Movimiento" content={nade.movement} />
                <NadeInfoText title="Técnica" content={nade.technique} />
                <NadeInfoText title="Subido por" content={nade.user.name!} />
              </Box>
              <ChakraIframe
                src={nade.gfycatUrl}
                allowFullScreen
                width="100%"
                height="100%"
                objectFit="contain"
              />
              <Flex px={4} py={2} flexDir="column">
                <Heading size="md">Descripción</Heading>
                <Text>
                  {nade.description ? nade.description : "No hay descripción."}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NadeComponent;
