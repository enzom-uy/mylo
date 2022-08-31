import { UserWithNades } from '@/interfaces/user';
import { trpc } from '@/utils/trpc';
import {
  Button,
  chakra,
  Flex,
  Link,
  ListItem,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { User } from '@prisma/client';
import React from 'react';
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import SimpleContainer from '../SimpleContainer';
import UpdateNade from './UpdateNade';

const Span = chakra('span');

const NadeItem: React.FC<{
  id: string;
  thrownFrom: string;
  endLocation: string;
  mapName: string;
  ttOrCt: string;
  description: string | null;
  gfycatUrl: string;
  tickrate: string;
  movement: string;
  technique: string;
  nadeType: string;
  position: string;
  removeNadeFromList: (nadeId: string) => void;
  user: UserWithNades | undefined;
}> = ({
  id,
  thrownFrom,
  endLocation,
  mapName,
  ttOrCt,
  description,
  gfycatUrl,
  tickrate,
  movement,
  technique,
  nadeType,
  position,
  removeNadeFromList,
  user,
}) => {
  const toast = useToast();
  const bgColor = useColorModeValue('#fff', 'blue-gray-transparent');

  const trpcEditNade = trpc.useMutation('nade.edit');
  const trpcDeleteNade = trpc.useMutation('nade.delete');
  const approveNade = async () => {
    const { newNade } = await trpcEditNade.mutateAsync({
      id: id,
      map: mapName,
    });
    if (newNade) {
      toast({
        title: 'Se ha aprobado la nade.',
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      removeNadeFromList(id);
    }
    return newNade;
  };

  const deleteNade = async () => {
    toast({
      title: 'Borrando nade...',
      status: 'loading',
      position: 'top',
      isClosable: true,
    });
    const { success, error } = await trpcDeleteNade.mutateAsync({ id: id });
    if (success) {
      toast.closeAll();
      toast({
        title: 'Se ha borrado la nade.',
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      removeNadeFromList(id);
    }
    if (error) {
      toast.closeAll();
      toast({
        title: 'Ha ocurrido un error.',
        description: error,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  return (
    <SimpleContainer
      display="grid"
      as={ListItem}
      bgColor={bgColor}
      key={id}
      width="800px"
      boxShadow="baseline"
      gridTemplateColumns={user ? '1fr 1fr' : '1fr 1fr .4fr'}
      padding=".8rem"
    >
      <Flex flexDir="column" justifyContent="space-between" maxW="250px">
        <Text>
          <Span fontWeight="bold">{thrownFrom}</Span> a{' '}
          <Span fontWeight="bold">{endLocation}</Span>
        </Text>
        <Text>
          Mapa: <Span fontWeight="bold">{mapName}</Span>
        </Text>
        <Text>
          Bando: <Span fontWeight="bold">{ttOrCt}</Span>
        </Text>
        <Text maxW="40ch">{description}</Text>

        <Link target="_blank" href={gfycatUrl} width="min-content" maxW="30ch">
          {gfycatUrl}
        </Link>
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="center"
        width={user ? 'fit-content' : undefined}
      >
        <Text>
          Tickrate: <Span fontWeight="bold">{tickrate}</Span>
        </Text>
        <Text>
          Movement: <Span fontWeight="bold">{movement}</Span>
        </Text>
        <Text>
          Technique: <Span fontWeight="bold">{technique}</Span>
        </Text>
        <Text>
          NadeType: <Span fontWeight="bold">{nadeType}</Span>
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        {!user && (
          <>
            <Button
              width="fit-content"
              leftIcon={<AiOutlineCheck fontSize="1.6rem" />}
              colorScheme="green"
              onClick={approveNade}
            >
              Aprobar
            </Button>
            <UpdateNade
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
              removeNadeFromList={removeNadeFromList}
            />

            <Button
              width="fit-content"
              leftIcon={<AiOutlineDelete fontSize="1.6rem" />}
              colorScheme="red"
              onClick={deleteNade}
            >
              Borrar
            </Button>
          </>
        )}
      </Flex>
    </SimpleContainer>
  );
};

export default NadeItem;
