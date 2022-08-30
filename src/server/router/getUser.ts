import { prisma } from "@/server/db/client"
import { z } from "zod"
import { createRouter } from './context'

export const getUserRouter = createRouter().mutation("getUser", {
  input: z.object({
    email: z.string()
  }),
  async resolve({ input }) {
    const email = input.email

    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })
    return user
  }
})
