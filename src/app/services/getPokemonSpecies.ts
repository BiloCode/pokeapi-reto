import { URL_BASE } from "@/config/http";

import { PokemonSpecieType } from "@/app/types/PokemonSpecieType";

type ReturnType = PokemonSpecieType | null;

const getPokemonSpecies = async (pokemonId: number): Promise<ReturnType> => {
  try {
    const request = await fetch(`${URL_BASE}/pokemon-species/${pokemonId}/`);
    const requestData = await request.json();

    return requestData;
  } catch (error) {
    return null;
  }
};

export default getPokemonSpecies;
