import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  List,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import NavbarLinks from "../NavbarLinks";
import SidebarContent from "./SidebarContent";

const DrawerContainer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerContainer;
