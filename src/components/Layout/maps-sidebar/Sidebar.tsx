import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { navbarLinks } from "src/helpers/variables";
import SignWithGoogle from "../SignWithGoogle";

const Sidebar: React.FC = () => {
  const pathname = useRouter().pathname;
  const { data: session } = useSession();
  return (
    <aside>
      <div className="flex flex-col h-fit mb-4 rounded-lg shadow-light-shadow">
        <ul className="flex flex-col gap-2">
          {navbarLinks.map((link) => (
            <li
              key={link.title}
              className={`transition-all cursor-pointer hover:bg-white first:rounded-t-lg last:rounded-b-lg text-black-75 ${
                pathname === link.href ? "bg-white" : undefined
              }`}
            >
              <Link href={link.href}>
                <a className="flex gap-2 items-center px-4 py-2 font-semibold">
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <SignWithGoogle />
    </aside>
  );
};

export default Sidebar;
