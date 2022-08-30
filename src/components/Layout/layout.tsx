import Sidebar from "./sidebar/Sidebar";
import Navbar from "./Navbar";
import useUserIsAdmin from "@/hooks/useUserIsAdmin";

const Layout: React.FC = () => {
  const { userIsAdmin, session, status } = useUserIsAdmin()
  return (
    <>
      <Navbar session={session} />
      <Sidebar session={session} status={status} isAdmin={userIsAdmin} />
    </>
  )
}

export default Layout
