import { PokemonType } from "@/app/types/PokemonType";

type ReturnType = PokemonType | null;

const getPokemon = async (
  url: string,
  signal?: AbortSignal
): Promise<ReturnType> => {
  try {
    const request = await fetch(url, { signal });
    const requestData = await request.json();

    return requestData || null;
  } catch (error) {
    return null;
  }
};

export default getPokemon;
