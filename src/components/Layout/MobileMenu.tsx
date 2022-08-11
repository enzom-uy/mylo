import {
  chakra,
  Flex,
  Icon,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FiSettings } from "react-icons/fi";
import { GiStunGrenade } from "react-icons/gi";
import { TbMapSearch } from "react-icons/tb";
import { mapsLinks } from "src/helpers/variables";
import { map } from "zod";
import MobileMenuMapsLinks from "./MobileMenuMapsLinks";

const mobileMenuItems = [
  {
    title: "CFGs",
    icon: FiSettings,
    href: "/cfgs",
  },
  {
    title: "Mis Nades",
    icon: GiStunGrenade,
    href: "/user/nades",
  },
];

const MobileMenu: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Flex
      position="fixed"
      w="full"
      bottom="0"
      // borderTop="2px"
      // borderColor="black-50"
      px={2}
      bgColor="#fafafa"
      boxShadow="0px -5px 35px -10px rgba(0,0,0, .25)"
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
          _active={{ bgColor: "black-10" }}
        >
          <Menu isLazy>
            <Tooltip label="Mapas" hasArrow closeOnClick>
              <MenuButton minW="100%">
                <Icon
                  as={TbMapSearch}
                  fontSize="1.5rem"
                  color="primary"
                  w="100%"
                />
              </MenuButton>
            </Tooltip>
            <MenuList mb=".5rem" zIndex="99">
              <MobileMenuMapsLinks />
            </MenuList>
          </Menu>
        </ListItem>

        {mobileMenuItems.map((item) => (
          <Tooltip key={item.title} label={item.title} hasArrow>
            <chakra.button
              display="flex"
              flexDir="column"
              alignItems="center"
              cursor="pointer"
              w="full"
              px={2}
              py={3}
              transition="all 150ms"
              _active={{ bgColor: "black-10" }}
            >
              <Link href={item.href}>
                <chakra.a w="full">
                  <ListItem>
                    <Icon as={item.icon} fontSize="1.5rem" color="primary" />
                  </ListItem>
                </chakra.a>
              </Link>
            </chakra.button>
          </Tooltip>
        ))}
      </List>
    </Flex>
  );
};

export default MobileMenu;
