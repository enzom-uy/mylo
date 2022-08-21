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

export const getAllNadeTypes = async (getNadesOfThisType?: "getNadesToo") => {
  if (getNadesOfThisType === "getNadesToo") {
    return await prisma.nadeType.findMany({
      select: {
        typeName: true,
        nadesOfThisType: true,
      },
    });
  }
  return await prisma.nadeType.findMany();
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

export const getSingleNadeType = async (nadeType: string) => {
  return await prisma.nadeType.findMany({
    where: {
      typeName: nadeType,
    },
  });
};
