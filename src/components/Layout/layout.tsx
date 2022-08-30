import Sidebar from "./sidebar/Sidebar";
import Navbar from "./Navbar";
import { useSession } from "next-auth/react";

const Layout: React.FC = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <Navbar session={session} />
      <Sidebar session={session} status={status} />
    </>
  )
}

export default Layout
