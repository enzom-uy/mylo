import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { trpc } from "@/utils/trpc";
import { User } from "@prisma/client";

const useUserIsAdmin = () => {
  const [checking, setChecking] = useState(true)
  const [userIsAdmin, setUserIsAdmin] = useState(false)
  const { data: session, status } = useSession();
  const trpcGetUser = trpc.useMutation("user.getUser")
  useEffect(() => {
    if (session?.user?.email) {
      const getUser = async () => {
        const user = await trpcGetUser.mutateAsync({ email: session.user!.email! }) as User
        if (user.role !== 'ADMIN') {
          setUserIsAdmin(false)
        } else {
          setUserIsAdmin(true)
          setChecking(false)
        }
      }
      getUser()
    }
  }, [session])
  return { userIsAdmin, session, status, checking }
}

export default useUserIsAdmin
