import Sidebar from "./sidebar/Sidebar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { trpc } from "@/utils/trpc";
import { User } from "@prisma/client";
import useUserIsAdmin from "@/hooks/useUserIsAdmin";

const Layout: React.FC = () => {
  const { userIsAdmin, session, status, checking } = useUserIsAdmin()

  return (
    <>
      <Navbar session={session} />
      <Sidebar session={session} status={status} isAdmin={userIsAdmin} checking={checking} />
    </>
  )
}

export default Layout
