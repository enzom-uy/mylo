import StyledLink from "@/components/Layout/StyledLink";
import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const CustomButton: React.FC<{
  href: string;
  text: string;
  icon: IconType;
}> = ({ href, text, icon }) => {
  return (
    <Link href={href}>
      <StyledLink width="100%">
        {icon && <Icon fontSize="1.5rem" as={icon} />}
        {text}
      </StyledLink>
    </Link>
  );
};

export default CustomButton;
