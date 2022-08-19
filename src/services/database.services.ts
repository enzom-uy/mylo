import { prisma } from "src/server/db/client";

export const getAllmaps = async () => {
  return await prisma.map.findMany({
    select: {
      id: true,
      mapName: true,
      NadesInMap: true,
    },
  });
};

export const getAllNades = async () => {
  return await prisma.nade.findMany({
    select: {
      id: true,
      thrownFrom: true,
      endLocation: true,
      gfycatUrl: true,
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

export const getAllNadeTypes = async (getNadesOfThisType?: "getNadesToo") => {
  if (getNadesOfThisType === "getNadesToo") {
    return await prisma.nadeType.findMany({
      select: {
        typeName: true,
        nadesOfThisType: true,
      },
    });
  }
  return await prisma.nadeType.findMany({
    select: {
      typeName: true,
    },
  });
};
