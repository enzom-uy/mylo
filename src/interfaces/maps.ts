export interface AllMapsInfo {
  NadesInMap: {
    map: {
      mapName: string;
    };
    user: {
      id: string;
      name: string | null;
    };
    description: string | null;
    thrownFrom: string;
    endLocation: string;
    movement: string;
    technique: string;
    tickrate: string;
    ttOrCt: string;
    votes: number;
    position: string;
    gfycatUrl: string;
    nadeType: string;
  }[];
  mapName: string;
  id: string;
}
[];
