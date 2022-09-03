import React from 'react';
import { BiEdit } from 'react-icons/bi';
import ModalContainer from '../ModalContainer';
import UpdateNadeForm from './UpdateNadeForm';

interface Props {
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
}

const UpdateNade: React.FC<Props> = ({
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
}) => {
  return (
    <>
      <ModalContainer
        title="Editar nade"
        buttonText="Editar"
        icon={<BiEdit fontSize="1.6rem" />}
      >
        <UpdateNadeForm
          id={id}
          thrownFrom={thrownFrom}
          endLocation={endLocation}
          description={description}
          tickrate={tickrate}
          ttOrCt={ttOrCt}
          movement={movement}
          technique={technique}
          gfycatUrl={gfycatUrl}
          nadeType={nadeType}
          mapName={mapName}
          position={position}
          removeNadeFromList={removeNadeFromList}
        />
      </ModalContainer>
    </>
  );
};

export default UpdateNade;
