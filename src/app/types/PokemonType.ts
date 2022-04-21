import { PokeResult } from "./PokeListResultType";

type Ability = {
  ability: PokeResult;
  is_hidden: boolean;
  slot: number;
};

type Move = {
  move: PokeResult;
  version_group_details: [];
};

export type Type = {
  slot: number;
  type: PokeResult;
};

export type PokemonType = {
  abilities: Ability[];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: false;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: {
    back_default: string;
    front_default: string;
  };
  stats: [];
  types: Type[];
  weight: number;
};
