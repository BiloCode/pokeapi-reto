import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { LIST_POKEMON_KEY } from "@/config/storage";
import { PokemonType } from "@/app/types/PokemonType";

const usePokemonStorage = () => {
  const { getItem, setItem } = useAsyncStorage(LIST_POKEMON_KEY);

  const getPokemonList = async (): Promise<PokemonType[]> => {
    const myPokemonList = await getItem();

    if (!myPokemonList) {
      return [];
    }

    return JSON.parse(myPokemonList);
  };

  const savePokemon = async (newPokemon: PokemonType): Promise<boolean> => {
    const myPokemonList = await getItem();

    if (!myPokemonList) {
      await setItem(JSON.stringify([newPokemon]));
      return true;
    }

    const pokeList: PokemonType[] = JSON.parse(myPokemonList);
    const isExistsInList = pokeList.some((v) => {
      return v.id === newPokemon.id;
    });

    if (!isExistsInList) {
      await setItem(JSON.stringify([newPokemon, ...pokeList]));
      return true;
    }

    return false;
  };

  return {
    getPokemonList,
    savePokemon,
  };
};

export default usePokemonStorage;
