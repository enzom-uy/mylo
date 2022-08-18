import MapsMobileMenu from "@/components/Layout/MapsMobileMenu";
import MobileMenuItems from "@/components/Layout/MobileMenuItems";
import useViewport from "@/hooks/useViewport";
import { Flex, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const MobileMenu: React.FC = () => {
  const iconColor = useColorModeValue("primary", "white");
  const menuBgColor = useColorModeValue(
    "rgba(255,255,255, .1)",
    "rgba(45, 55, 72, .2)"
  );
  const isMobile = useViewport();
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
      backdropFilter="auto"
      backdropBlur="8px"
      display={!isMobile ? "none" : undefined}
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
