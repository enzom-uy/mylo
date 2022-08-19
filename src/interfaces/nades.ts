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
  dust2: "Dust 2";
  inferno: "Inferno";
  nuke: "Nuke";
  tuscan: "Tuscan";
}
