import { maps } from "@/helpers/variables";
import { Box, chakra, MenuItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const MobileMenuMapsLinks = () => {
  return (
    <>
      {maps.map((map) => (
        <MenuItem key={map.title} display="flex">
          <Link href={map.href}>
            <chakra.a
              width="100%"
              display="flex"
              alignItems="center"
              gap={3}
              fontWeight="medium"
            >
              {map.img ? (
                <Image
                  src={map.img}
                  height="24"
                  width="24"
                  alt={`Icono de ${map.title}`}
                  style={{ borderRadius: '100%' }}
                />
              ) : (
                <Box height="24px" width="24px"></Box>
              )}

              {map.title}
            </chakra.a>
          </Link>
        </MenuItem>
      ))}
    </>
  );
};

export default MobileMenuMapsLinks;
