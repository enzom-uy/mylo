import { prisma } from "@/server/db/client"
import { z } from "zod"
import { createRouter } from './context'

export const userRouter = createRouter().mutation("getUser", {
  input: z.object({
    email: z.string()
  }),
  async resolve({ input }) {
    const email = input.email

    const user = await prisma.user.findFirst({
      where: {
        email
      },
      include: {
        Nade: true
      }
    })
    return user
  }
})
