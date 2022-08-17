import {
  Box,
  chakra,
  Icon,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navbarLinks } from "src/helpers/variables";

const NavbarLinks: React.FC = () => {
  const pathname = useRouter().query.map;
  const textColor = useColorModeValue("black-75", "white");
  const backgroundColor = useColorModeValue("white", "#23272e");
  return (
    <>
      {navbarLinks.map((link) => {
        const formattedLinkTitle = link.title.toLowerCase().replace(/\s/g, "");
        const userIsHere = pathname === formattedLinkTitle;
        return (
          <ListItem
            key={link.title}
            transition="all 150ms"
            cursor="pointer"
            color={textColor}
            _hover={{ bgColor: backgroundColor }}
            _first={{ roundedTop: "lg" }}
            _last={{ roundedBottom: "lg" }}
            bgColor={userIsHere ? backgroundColor : undefined}
          >
            <Link href={link.href}>
              <chakra.a
                display="flex"
                gap={4}
                alignItems="center"
                px={6}
                py={4}
                fontWeight="semibold"
                textDecoration="none"
              >
                {link.img ? (
                  <Image
                    src={link.img}
                    height={24}
                    width={24}
                    alt={`${link.title} logo`}
                    layout="fixed"
                  />
                ) : link.icon ? (
                  <Icon as={link.icon} fontSize="24px" />
                ) : (
                  <Box height="24px" width="24px"></Box>
                )}

                {link.title}
              </chakra.a>
            </Link>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavbarLinks;
