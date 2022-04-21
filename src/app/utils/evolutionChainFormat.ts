import { PokeResult } from "@/app/types/PokeListResultType";
import { Chain, PokemonChainType } from "@/app/types/PokemonChainType";

const _setSpecieInList = (chain: Chain, data: PokeResult[]) => {
  chain.evolves_to.forEach((chain) => {
    data.push(chain.species);
    _setSpecieInList(chain, data);
  });
};

const evolutionChainFormat = (chainData: PokemonChainType): PokeResult[] => {
  const pokemonChainList = [chainData.chain.species];

  _setSpecieInList(chainData.chain, pokemonChainList);

  return pokemonChainList;
};

export default evolutionChainFormat;
