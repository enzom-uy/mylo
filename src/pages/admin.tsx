import SimpleContainer from "@/components/SimpleContainer";
import { getUnapprovedNades, getUser } from "@/services/database.services";
import {
  chakra,
  Flex,
  Input,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Nade } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import Head from "next/head";
import { authOptions } from "./api/auth/[...nextauth]";

interface CustomNade extends Nade {
  map: { mapName: string };
}

const Span = chakra("span");

const Admin: NextPage<{
  user: {
    email: string;
    id: string;
    role: string;
    name: string;
    map: { mapName: string };
  };
  unapprovedNades: CustomNade[];
}> = ({ user, unapprovedNades }) => {
  const bgColor = useColorModeValue("#fff", "blue-gray-transparent");

  return (
    <>
      <Head>
        <title>Admin | Mylo</title>
      </Head>
      <Flex as={List} flexDir="column" gap={3} mb={12}>
        {unapprovedNades.map((nade) => {
          const {
            thrownFrom,
            endLocation,
            description,
            tickrate,
            ttOrCt,
            movement,
            technique,
            gfycatUrl,
            id,
            nadeType,
            map,
          } = nade;
          const { mapName } = map;
          return (
            <SimpleContainer
              as={ListItem}
              bgColor={bgColor}
              key={id}
              width="100%"
              alignItems="space-between"
              boxShadow="baseline"
            >
              <Flex gap={4} justifyContent="space-between" px={4} py={2}>
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  minW="30rem"
                >
                  <Text>
                    <Span fontWeight="bold">{thrownFrom}</Span> a{" "}
                    <Span fontWeight="bold">{endLocation}</Span>
                  </Text>
                  <Text>
                    Mapa: <Span fontWeight="bold">{mapName}</Span>
                  </Text>
                  <Text>
                    Bando: <Span fontWeight="bold">{ttOrCt}</Span>
                  </Text>
                  <Text maxW="50ch">{description}</Text>

                  <Link target="_blank" href={gfycatUrl} width="fit-content">
                    {gfycatUrl}
                  </Link>
                </Flex>
                <Flex flexDir="column" minWidth="600px" justifyContent="center">
                  <Text>
                    Tickrate: <Span fontWeight="bold">{tickrate}</Span>
                  </Text>
                  <Text>
                    Movement: <Span fontWeight="bold">{movement}</Span>
                  </Text>
                  <Text>
                    Technique: <Span fontWeight="bold">{technique}</Span>
                  </Text>
                  <Text>
                    NadeType: <Span fontWeight="bold">{nadeType}</Span>
                  </Text>
                </Flex>
              </Flex>
            </SimpleContainer>
          );
        })}
      </Flex>
    </>
  );
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  const user = await getUser(session?.user?.email);
  const userIsAdmin = user[0]?.role === "ADMIN";
  if (!user || !userIsAdmin) {
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
