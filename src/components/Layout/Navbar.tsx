import Image from "next/image";
import Link from "next/link";
import React from "react";
import useViewport from "src/hooks/useViewport";
import MobileMenu from "./MobileMenu";
import NavbarLinks from "./NavbarLinks";
import myloLogo from "/public/navbar-logo.svg";

const Navbar: React.FC = () => {
  const { isMobile } = useViewport();
  return (
    <nav className="flex relative items-center justify-between px-4 py-2 md:px-6 md:py-4">
      <Link href="/">
        <a>
          <Image
            src={myloLogo}
            alt="Logo de Mateo y los otros"
            height={42}
            width={42}
            priority
          />
        </a>
      </Link>
      <ul className="flex flex-col md:flex-row md:gap-4 font-medium">
        {isMobile ? <MobileMenu /> : <NavbarLinks />}
      </ul>
    </nav>
  );
};

export default Navbar;
