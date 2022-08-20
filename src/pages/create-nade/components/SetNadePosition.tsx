import MapOverlay from "@/pages/maps/MapOverlay";
import { mapOverlays } from "@/pages/maps/[map]";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const SetNadePosition: React.FC<{
  selectedMap: string;
  getNadePosition: (pos: any) => void;
  disabled?: boolean;
  nadeHasPosition: boolean;
}> = ({ selectedMap, getNadePosition, disabled, nadeHasPosition }) => {
  const [map] = mapOverlays.filter((map) => map.name === selectedMap);
  const mapImg = map?.img;
  const mapName = map?.name;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pos, setPos] = useState<{ x: number; y: number }>();

  const getPos = (position: { x: number; y: number }) => {
    setPos(position);
  };
  useEffect(() => {
    getNadePosition(pos);
  }, [pos]);

  return (
    <>
      <Button
        onClick={onOpen}
        bgColor={nadeHasPosition ? "green.700" : "primary"}
        _hover={{ bgColor: "primary-light" }}
        isDisabled={disabled ? true : false}
        color="white"
      >
        {disabled
          ? "Primero elige un mapa"
          : nadeHasPosition
          ? "Posición seleccionada"
          : "Selecciona una posición"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="min-content">
          <ModalHeader>Seleccionar posición</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {map !== undefined && (
              <MapOverlay getNadePosition={getPos} img={mapImg} map={mapName} />
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="primary"
              _hover={{ bgColor: "primary-light" }}
              mr={3}
              onClick={onClose}
              color="white"
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SetNadePosition;
