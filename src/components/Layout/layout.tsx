import Sidebar from './sidebar/Sidebar';
import Navbar from './Navbar';
import useUserIsAdmin from '@/hooks/useUserIsAdmin';

const Layout: React.FC = () => {
  const { userIsAdmin, session, status, checking } = useUserIsAdmin();

  return (
    <>
      <Navbar session={session} />
      <Sidebar
        session={session}
        status={status}
        isAdmin={userIsAdmin}
        checking={checking}
      />
    </>
  );
};

export default Layout;
