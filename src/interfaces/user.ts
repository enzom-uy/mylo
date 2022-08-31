import { Nade } from '@prisma/client';

export interface NadeWithMapName extends Nade {
  map: {
    mapName: string;
  };
}
export interface UserWithNades {
  name: string;
  image: string;
  email: string;
  role: 'ADMIN' | 'MOD' | 'USER';
  id: string;
  Nade: NadeWithMapName[];
}
