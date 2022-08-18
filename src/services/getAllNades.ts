import { prisma } from "src/server/db/client";

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

export default getAllNades;
