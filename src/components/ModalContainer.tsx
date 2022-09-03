import React, { ReactElement, ReactNode } from 'react';
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

interface Props {
  icon: ReactElement;
  buttonText: string;
  children: ReactNode;
  title: string;
}

const ModalContainer: React.FC<Props> = ({
  icon,
  buttonText,
  children,
  title,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        width="fit-content"
        leftIcon={icon}
        colorScheme="green"
        onClick={onOpen}
      >
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="fit-content" position="absolute">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalContainer;
