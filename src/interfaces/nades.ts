export interface FindAllNadesResponse {
  id: string;
  thrownFrom: string;
  endLocation: string;
  gfycatUrl: string;
}

export type NadeType = {
  smoke: "Smoke";
  molo: "Molo";
  flash: "Flash";
  Deto: "Deto";
};

export interface Maps {
  mirage: "Mirage";
  overpass: "Overpass";
  vertigo: "Vertigo";
  dust2: "Dust2";
  inferno: "Inferno";
  nuke: "Nuke";
  tuscan: "Tuscan";
}

export interface CreateNadeResponse {
  id: string;
  thrownFrom: string;
  endLocation: string;
  mapId: string;
  userId: string;
  votes: number;
  tickrate: string;
  ttOrCt: string;
  gfycatUrl: string;
  description: string;
  movement: string;
  technique: string;
  approved: boolean;
  position: string;
  createdAt: string;
  updatedAt: string;
  error: "ALREADY_EXISTS";
  message: string;
}
