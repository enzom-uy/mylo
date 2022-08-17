import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";
import StyledLink from "../components/Layout/StyledLink";

const CustomButton: React.FC = () => {
  return (
    <Link href="/account">
      <StyledLink>
        <FiUser fontSize="1.7rem" />
        Mi Perfil
      </StyledLink>
    </Link>
  );
};

export default CustomButton;
