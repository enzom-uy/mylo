import NadesList from "@/components/admin/NadesList";
import { getUnapprovedNades, getUser } from "@/services/database.services";
import { Nade } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import Head from "next/head";
import { authOptions } from "./api/auth/[...nextauth]";

interface CustomNade extends Nade {
  map: { mapName: string };
}

const Admin: NextPage<{
  unapprovedNades: CustomNade[];
}> = ({ unapprovedNades }) => {
  return (
    <>
      <Head>
        <title>Admin | Mylo</title>
      </Head>
      <NadesList nades={unapprovedNades} />
    </>
  );
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  const user = await getUser(session?.user?.email);
  const userIsAdmin = user[0]?.role === "ADMIN";
  if (!session || !user || !userIsAdmin) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else {
    const unapprovedNades = await getUnapprovedNades();

    return {
      props: {
        user: user[0],
        unapprovedNades: JSON.parse(JSON.stringify(unapprovedNades)),
      },
    };
  }
};
