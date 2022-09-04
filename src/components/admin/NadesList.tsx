import { NadeWithMapName, UserWithNades } from '@/interfaces/user';
import { trpc } from '@/utils/trpc';
import { Button, Flex, List } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import NadeItem from './NadeItem';
import Pagination from './Pagination';

const NadesList: React.FC<{
  nades: NadeWithMapName[];
  user?: UserWithNades;
}> = ({ nades, user }) => {
  const [loadedNades, setLoadedNades] = useState<NadeWithMapName[]>(nades);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const nadesPerPage = 5;

  const indexOfLastNade = currentPage * nadesPerPage;
  const indexOfFirstNade = indexOfLastNade - nadesPerPage;
  const currentNades = loadedNades.slice(indexOfFirstNade, indexOfLastNade);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const trpcGetNades = trpc.useMutation('nade.getAllUnapprovedNades');
  const trpcGetNadesFromUser = trpc.useMutation('nade.getNadesFromUser');

  const getAllNades = useMemo(
    () => async () => {
      setLoading(true);
      const nades = await trpcGetNades.mutateAsync();
      setLoadedNades(nades);
      setLoading(false);
    },
    [loadedNades]
  );

  const removeNadeFromList = (nadeId: string) => {
    const updatedNades = nades.filter((nade) => nade.id !== nadeId);
    getAllNades();
    setLoadedNades(updatedNades);
  };

  useEffect(() => {
    if (user) {
      const getNadesFromUser = async () => {
        const nades = await trpcGetNadesFromUser.mutateAsync({
          email: user.email!,
        });
        setLoadedNades(nades);
        setLoading(false);
      };
      getNadesFromUser();
    }
  }, []);

  return (
    <>
      {loading ? undefined : (
        <Pagination
          elementsPerPage={nadesPerPage}
          totalElements={loadedNades.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}

      {!user && (
        <Button width="min-content" onClick={getAllNades}>
          Reload
        </Button>
      )}
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
                user={user}
              />
            );
          })
        ) : (
          <div>
            {user
              ? 'Este usuario no ha subido ninguna nade aún 😢.'
              : 'Ya no quedan más nades 😃.'}
          </div>
        )}
      </Flex>
    </>
  );
};

export default React.memo(NadesList);
