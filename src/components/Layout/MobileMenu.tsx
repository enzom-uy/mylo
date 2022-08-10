import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";
import { navbarLinks } from "src/helpers/variables";
import SignWithGoogle from "./SignWithGoogle";

const MobileMenu: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Menu
      menuClassName="bg-[#23272e] text-white p-0"
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
      {navbarLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <MenuItem>
            <a className="flex gap-2 items-center py-2 font-semibold">
              {link.img && (
                <Image
                  src={link.img}
                  height={24}
                  width={24}
                  alt={`${link.title} logo`}
                  layout="fixed"
                />
              )}
              {link.icon && <link.icon className="text-[24px]" />}
              {link.title}
            </a>
          </MenuItem>
        </Link>
      ))}
      <MenuItem>
        <SignWithGoogle />
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
