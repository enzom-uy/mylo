import { UserWithNades } from '@/interfaces/user';
import { trpc } from '@/utils/trpc';
import { useState, useEffect } from 'react';

const useGetUser = (email: string) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserWithNades>();
  const trpcGetUser = trpc.useMutation('user.getUser');

  useEffect(() => {
    async function getUser() {
      const user = (await trpcGetUser.mutateAsync({
        email: email,
      })) as UserWithNades;
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, []);

  return { loading, user };
};

export default useGetUser;
