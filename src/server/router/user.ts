import { prisma } from '@/server/db/client';
import { z } from 'zod';
import { createRouter } from './context';
import { required_error, tooSmallMsg } from './nade';

export const userRouter = createRouter()
  .mutation('getUser', {
    input: z.object({
      email: z.string(),
    }),
    async resolve({ input }) {
      const email = input.email;

      const user = await prisma.user.findFirst({
        where: {
          email,
        },
        include: {
          Nade: {
            include: {
              map: {
                select: {
                  mapName: true,
                },
              },
            },
          },
        },
      });
      return user;
    },
  })
  .mutation('edit', {
    input: z.object({
      email: z.string(),
      name: z
        .string({ required_error: required_error })
        .min(4, { message: tooSmallMsg }),
    }),
    async resolve({ input }) {
      const newUser = await prisma.user.update({
        where: {
          email: input.email,
        },
        data: {
          ...input,
        },
      });
      return { newUser };
    },
  });
