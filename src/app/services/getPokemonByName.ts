import { URL_BASE } from "@/config/http";
import { PokemonType } from "../types/PokemonType";

type ReturnType = PokemonType | null;

const getPokemonByName = async (pokemonName: string): Promise<ReturnType> => {
  const url = `${URL_BASE}/pokemon/${pokemonName}`;

  try {
    const request = await fetch(url);
    const requestData = await request.json();

    return requestData || null;
  } catch (error) {
    return null;
  }
};

export default getPokemonByName;
