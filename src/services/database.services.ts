import { prisma } from "src/server/db/client";

export const getMapsWithNades = async () => {
  return await prisma.map.findMany({
    select: {
      NadesInMap: {
        where: {
          approved: true,
        },
        include: {
          user: {
            select: {
              name: true,
              id: true,
            },
          },
          map: {
            select: {
              mapName: true,
            },
          },
        },
      },
      mapName: true,
      id: true,
    },
  });
};

export const getUnapprovedNades = async () => {
  return await prisma.nade.findMany({
    where: {
      approved: false,
    },
    include: {
      map: {
        select: {
          mapName: true,
        },
      },
    },
  });
};

export const getNewerNades = async () => {
  return await prisma.nade.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getUser = async (email: string | undefined | null) => {
  return await prisma.user.findMany({
    where: {
      email: email,
    },
    select: {
      email: true,
      id: true,
      role: true,
      name: true,
    },
  });
};

export const getSingleMap = async (map: string) => {
  return await prisma.map.findMany({
    where: {
      mapName: map,
    },
  });
};
