import { PokeResult } from "./PokeListResultType";

type TextEntry = {
  flavor_text: string;
  version: PokeResult;
  language: PokeResult;
};

export type PokemonSpecieType = {
  is_mythical: boolean;
  is_legendary: boolean;
  flavor_text_entries: TextEntry[];
  evolution_chain: {
    url: string;
  };
};
