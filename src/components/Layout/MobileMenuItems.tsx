import { chakra, Icon, ListItem, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { mobileMenuItems } from "src/helpers/variables";
import useViewport from "src/hooks/useViewport";

const MobileMenuItems: React.FC<{
  backgroundColor: string;
  iconColor: string;
}> = ({ backgroundColor, iconColor }) => {
  const isMobile = useViewport();
  return (
    <>
      {mobileMenuItems.map((item) => (
        <Tooltip
          key={item.title}
          label={item.title}
          hasArrow
          isDisabled={isMobile ? true : false}
        >
          <chakra.button
            display="flex"
            flexDir="column"
            alignItems="center"
            cursor="pointer"
            w="full"
            px={2}
            py={3}
            transition="all 150ms"
            _active={{ bgColor: backgroundColor }}
          >
            <Link href={item.href}>
              <chakra.a w="full">
                <ListItem>
                  <Icon as={item.icon} fontSize="1.5rem" color={iconColor} />
                </ListItem>
              </chakra.a>
            </Link>
          </chakra.button>
        </Tooltip>
      ))}
    </>
  );
};

export default MobileMenuItems;
