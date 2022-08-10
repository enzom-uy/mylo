import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { MdMenu } from "react-icons/md";
import { navbarLinks } from "src/helpers/variables";
import NavbarLinks from "./NavbarLinks";

const MobileMenu: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Menu
      menuClassName="bg-[#23272e] text-white"
      menuButton={
        <MenuButton>
          <MdMenu className="text-4xl text-primary" />
        </MenuButton>
      }
      transition
      align="end"
      arrow
      arrowStyle={{ backgroundColor: "#23272e" }}
    >
      {!session
        ? navbarLinks.unauthorized.map((link) => (
            <MenuItem key={link.href}>
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </MenuItem>
          ))
        : navbarLinks.authorized.map((link) => (
            <MenuItem key={link.href}>
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </MenuItem>
          ))}
    </Menu>
  );
};

export default MobileMenu;
