import { PokemonChainType } from "@/app/types/PokemonChainType";

type ReturnType = PokemonChainType | null;

const getPokemonEvolutionChain = async (url: string): Promise<ReturnType> => {
  try {
    const request = await fetch(url);
    const requestData = await request.json();

    return requestData;
  } catch (error) {
    return null;
  }
};

export default getPokemonEvolutionChain;
