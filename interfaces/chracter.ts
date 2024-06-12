import type { IEpisode } from "./episode";

export interface ICharacter {
  created: string;
  episode: number[] | IEpisode;
  gender: string;
  id: number;
  image: string;
  location: any;
  name: string;
  origin: any;
  species: string;
  status: string;
  type: "";
  url: string;
}
