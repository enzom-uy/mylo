import { trpc } from "@/utils/trpc";
import { Button, Flex, List } from "@chakra-ui/react";
import { Nade } from "@prisma/client";
import React, { useState } from "react";
import NadeItem from "./NadeItem";
import Pagination from "./Pagination";

interface CustomNade extends Nade {
  map: { mapName: string };
}

const NadesList: React.FC<{ nades: CustomNade[] }> = ({ nades }) => {
  const [loadedNades, setLoadedNades] = useState<CustomNade[]>(nades);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const nadesPerPage = 5;

  const indexOfLastNade = currentPage * nadesPerPage;
  const indexOfFirstNade = indexOfLastNade - nadesPerPage;
  const currentNades = loadedNades.slice(indexOfFirstNade, indexOfLastNade);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const trpcGetNades = trpc.useMutation("getNades.getAllUnapprovedNades");

  const getAllNades = async () => {
    setLoading(true);
    const nades = await trpcGetNades.mutateAsync();
    setLoadedNades(nades);
    setLoading(false);
  };

  const removeNadeFromList = (nadeId: string) => {
    const updatedNades = nades.filter((nade) => nade.id !== nadeId);
    getAllNades();
    setLoadedNades(updatedNades);
  };

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <Pagination
          elementsPerPage={nadesPerPage}
          totalElements={loadedNades.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}

      <Button width="min-content" onClick={getAllNades}>
        Reload
      </Button>
      <Flex as={List} flexDir="column" gap={3} mb={10}>
        {loading ? (
          <div>Cargando...</div>
        ) : currentNades.length !== 0 ? (
          currentNades.map((nade) => {
            const {
              thrownFrom,
              endLocation,
              description,
              tickrate,
              ttOrCt,
              movement,
              technique,
              gfycatUrl,
              id,
              nadeType,
              map,
              position,
            } = nade;
            const { mapName } = map;

            return (
              <NadeItem
                thrownFrom={thrownFrom}
                endLocation={endLocation}
                description={description}
                tickrate={tickrate}
                ttOrCt={ttOrCt}
                movement={movement}
                technique={technique}
                gfycatUrl={gfycatUrl}
                id={id}
                nadeType={nadeType}
                mapName={mapName}
                position={position}
                key={id}
                removeNadeFromList={removeNadeFromList}
              />
            );
          })
        ) : (
          <div>Ya no quedan más nades 😃.</div>
        )}
      </Flex>
    </>
  );
};

export default NadesList;
