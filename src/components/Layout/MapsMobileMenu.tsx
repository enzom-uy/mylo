import { Icon, Menu, MenuButton, MenuList, Tooltip } from "@chakra-ui/react";
import React from "react";
import { TbMapSearch } from "react-icons/tb";
import MobileMenuMapsLinks from "./MobileMenuMapsLinks";

const MapsMobileMenu: React.FC<{ iconColor: string }> = ({ iconColor }) => {
  return (
    <Menu isLazy>
      <Tooltip label="Mapas" hasArrow closeOnClick offset={[0, 20]}>
        <MenuButton minW="100%">
          <Icon as={TbMapSearch} fontSize="1.5rem" color={iconColor} w="100%" />
        </MenuButton>
      </Tooltip>
      <MenuList
        mb=".5rem"
        zIndex="99"
        backdropFilter="auto"
        backdropBlur="6px"
        bgColor="rgba(45, 55, 72, .45)"
      >
        <MobileMenuMapsLinks />
      </MenuList>
    </Menu>
  );
};

export default MapsMobileMenu;
