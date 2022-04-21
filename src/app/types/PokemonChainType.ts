import { PokeResult } from "./PokeListResultType";

export type Chain = {
  is_baby: boolean;
  evolves_to: Chain[];
  species: PokeResult;
  evolution_details: [];
};

export type PokemonChainType = {
  id: number;
  chain: Chain;
  baby_trigger_item: null;
};
