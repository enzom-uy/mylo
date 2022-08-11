import { chakra, MenuItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { mapsLinks } from "src/helpers/variables";

const MobileMenuMapsLinks = () => {
  return (
    <>
      {mapsLinks.map((map) => (
        <MenuItem key={map.title} display="flex">
          <Link href={map.href}>
            <chakra.a
              width="100%"
              display="flex"
              alignItems="center"
              gap={3}
              fontWeight="medium"
            >
              <Image
                src={map.img}
                height="24"
                width="24"
                alt={`Icono de ${map.title}`}
              />
              {map.title}
            </chakra.a>
          </Link>
        </MenuItem>
      ))}
    </>
  );
};

export default MobileMenuMapsLinks;
