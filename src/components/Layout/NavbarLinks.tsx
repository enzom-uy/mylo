import { chakra, Icon, Link as ChakraLink, ListItem } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navbarLinks } from "src/helpers/variables";

const NavbarLinks: React.FC = () => {
  const pathname = useRouter().query.map;
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
            color="black-75"
            _hover={{ bgColor: "white" }}
            _first={{ roundedTop: "lg" }}
            _last={{ roundedBottom: "lg" }}
            bgColor={userIsHere ? "white" : undefined}
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
                {link.img && (
                  <Image
                    src={link.img}
                    height={24}
                    width={24}
                    alt={`${link.title} logo`}
                    layout="fixed"
                  />
                )}
                {link.icon && <Icon as={link.icon} fontSize="24px" />}

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
