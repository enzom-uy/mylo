import { CreateNadeResponse } from "@/interfaces/nades";
import { CreateNadeFormInputs } from "@/schemas/formSchema";
import { trpc } from "@/utils/trpc";
import { Nade } from "@prisma/client";
import { prisma } from "src/server/db/client";

export const getAllmaps = async () => {
  return await prisma.map.findMany();
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

export const getUser = async (email: string) => {
  return await prisma.user.findMany({
    where: {
      email: email,
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
