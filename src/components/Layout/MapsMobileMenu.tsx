import MobileMenuMapsLinks from "@/components/Layout/MobileMenuMapsLinks";
import useViewport from "@/hooks/useViewport";
import {
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { TbMapSearch } from "react-icons/tb";

const MapsMobileMenu: React.FC<{ iconColor: string }> = ({ iconColor }) => {
  const isMobile = useViewport();
  return (
    <Menu isLazy>
      <Tooltip
        label="Mapas"
        hasArrow
        closeOnClick
        offset={[0, 20]}
        isDisabled={isMobile ? true : false}
      >
        <MenuButton minW="100%">
          <Icon as={TbMapSearch} fontSize="1.5rem" color={iconColor} w="100%" />
        </MenuButton>
      </Tooltip>
      <MenuList
        mb=".5rem"
        zIndex="99"
        backdropFilter="auto"
        backdropBlur="6px"
        bgColor={useColorModeValue(
          "rgba(255, 255, 255, .45)",
          "rgba(45, 55, 72, .45)"
        )}
      >
        <MobileMenuMapsLinks />
      </MenuList>
    </Menu>
  );
};

export default MapsMobileMenu;
