import dynamic from 'next/dynamic';
import { mapOverlays } from '@/pages/maps/[map]';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState, Suspense } from 'react';

const DynamicMapOverlay = dynamic(() => import('@/pages/maps/MapOverlay'), {
  suspense: true,
});

const SetNadePosition: React.FC<{
  selectedMap: string;
  getNadePosition: (pos: any) => void;
  disabled?: boolean;
  nadeHasPosition: boolean;
  position?: string;
}> = ({
  selectedMap,
  getNadePosition,
  disabled,
  nadeHasPosition,
  position,
}) => {
  const [map] = mapOverlays.filter((map) => map.name === selectedMap);
  const mapImg = map?.img;
  const mapName = map?.name;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pos, setPos] = useState<{ x: number; y: number }>(
    (position && JSON.parse(position)) || { x: 0, y: 0 }
  );

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
        bgColor={nadeHasPosition ? 'green.700' : 'primary'}
        _hover={{ bgColor: 'primary-light' }}
        isDisabled={disabled ? true : false}
        color="white"
      >
        {disabled
          ? 'Primero elige un mapa'
          : nadeHasPosition
          ? 'Posición seleccionada'
          : 'Selecciona una posición'}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="min-content">
          <ModalHeader>Seleccionar posición</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {map !== undefined && (
              <Suspense
                fallback={
                  <Flex justifyContent="center" alignItems="center">
                    <Spinner size="lg" />
                  </Flex>
                }
              >
                <DynamicMapOverlay
                  getNadePosition={getPos}
                  img={mapImg}
                  mapName={mapName}
                  position={position}
                />
              </Suspense>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="primary"
              _hover={{ bgColor: 'primary-light' }}
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
