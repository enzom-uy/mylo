import { trpc } from "@/utils/trpc";
import { Nade } from "@prisma/client";
import React, { useEffect, useState } from "react";

const useGetNades = (
  type: "all" | "detos" | "flashes" | "molos" | "one ways" | "smokes"
) => {
  const [nades, setNades] = useState<Nade[]>();
  const [loading, setLoading] = useState(true);
  const nade = type;
  const trpcGetNades = trpc.useMutation("getNades.getAllNades", {
    async onSuccess() {
      console.log("Success");
    },
  });
  useEffect(() => {
    async function getAllNades() {
      const nades = await trpcGetNades.mutateAsync({ typeOrAll: nade });
      setNades(nades);
      setLoading(false);
    }
    getAllNades();
  }, []);

  return { nades, loading };
};

export default useGetNades;
