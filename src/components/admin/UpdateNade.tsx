import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";
import UpdateNadeForm from "./UpdateNadeForm";

interface Props {
  id: string;
  thrownFrom: string;
  endLocation: string;
  mapName: string;
  ttOrCt: string;
  description: string | null;
  gfycatUrl: string;
  tickrate: string;
  movement: string;
  technique: string;
  nadeType: string;
  position: string;
  removeNadeFromList: (nadeId: string) => void;
}

const UpdateNade: React.FC<Props> = ({
  id,
  thrownFrom,
  endLocation,
  mapName,
  ttOrCt,
  description,
  gfycatUrl,
  tickrate,
  movement,
  technique,
  nadeType,
  position,
  removeNadeFromList,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        width="fit-content"
        leftIcon={<BiEdit fontSize="1.6rem" />}
        colorScheme="green"
        onClick={onOpen}
      >
        Editar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="fit-content" position="absolute">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateNadeForm
              id={id}
              thrownFrom={thrownFrom}
              endLocation={endLocation}
              description={description}
              tickrate={tickrate}
              ttOrCt={ttOrCt}
              movement={movement}
              technique={technique}
              gfycatUrl={gfycatUrl}
              nadeType={nadeType}
              mapName={mapName}
              position={position}
              removeNadeFromList={removeNadeFromList}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateNade;
