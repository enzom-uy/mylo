import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import useViewport from "src/hooks/useViewport";
import MobileMenu from "./MobileMenu";
import NavbarLinks from "./NavbarLinks";
import SignWithGoogle from "./SignWithGoogle";
import myloLogo from "/public/navbar-logo.svg";

const Navbar: React.FC = () => {
  const { isMobile } = useViewport();
  const { data: session } = useSession();
  return (
    <nav className="flex relative items-center justify-between px-4 py-2 md:px-6 md:py-4">
      <Link href="/">
        <a className="transition-all hover:rotate-[20deg]">
          <Image
            src={myloLogo}
            alt="Logo de Mateo y los otros"
            height={38}
            width={38}
            priority
          />
        </a>
      </Link>
      {!session && !isMobile ? <SignWithGoogle /> : undefined}
      <ul>{isMobile && <MobileMenu />}</ul>
    </nav>
  );
};

export default Navbar;
