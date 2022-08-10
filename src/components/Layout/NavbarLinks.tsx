import { MenuItem } from "@szhsin/react-menu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navbarLinks } from "src/helpers/variables";
import useViewport from "src/hooks/useViewport";

const NavbarLinks: React.FC = () => {
  const { data: session } = useSession();
  const pathname = useRouter().pathname;
  return (
    <>
      {!session
        ? navbarLinks.unauthorized.map((link) => (
            <li
              key={link.href}
              role="menuitem"
              tabIndex={-1}
              className={`navbar-li ${
                pathname === link.href ? "text-primary" : undefined
              }`}
            >
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))
        : navbarLinks.authorized.map((link) => (
            <li
              key={link.href}
              tabIndex={-1}
              role="menuitem"
              className={`navbar-li ${
                pathname === link.href ? "text-primary" : undefined
              }`}
            >
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
    </>
  );
};

export default NavbarLinks;
