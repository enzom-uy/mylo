import { Flex, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MapsMobileMenu from "./MapsMobileMenu";
import MobileMenuItems from "./MobileMenuItems";

const MobileMenu: React.FC = () => {
  const iconColor = useColorModeValue("primary", "white");
  const menuBgColor = useColorModeValue("black-10", "rgba(45, 55, 72, .2)");
  return (
    <Flex
      position="fixed"
      w="full"
      bottom="0"
      px={2}
      bgColor={useColorModeValue(
        "rgba(255,255,255,.1)",
        "blue-gray-transparent"
      )}
      boxShadow="0px -5px 35px -10px rgba(0,0,0, .25)"
      backdropFilter="auto"
      backdropBlur="8px"
    >
      <List display="flex" width="full" justifyContent="space-around">
        <ListItem
          display="flex"
          flexDir="column"
          alignItems="center"
          cursor="pointer"
          w="full"
          px={2}
          py={3}
          transition="all 150ms"
          _active={{ bgColor: menuBgColor }}
        >
          <MapsMobileMenu iconColor={iconColor} />
        </ListItem>

        <MobileMenuItems backgroundColor={menuBgColor} iconColor={iconColor} />
      </List>
    </Flex>
  );
};

export default MobileMenu;
