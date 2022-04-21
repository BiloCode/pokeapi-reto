import debounce from "lodash/debounce";

import useGenericObject from "@/hooks/useGenericObject";
import useBoolean, { BooleanEvents } from "@/hooks/useBoolean";

import { PokemonType } from "@/app/types/PokemonType";

import getPokemonByName from "@/app/services/getPokemonByName";

const useSearchPokemon = (loading: BooleanEvents) => {
  const [searching, searchHandler] = useBoolean(false);
  const [pokemonFind, pokemonFindHandler] = useGenericObject<PokemonType>();

  const onSearchPokemon = debounce(async (text: string) => {
    if (text === "") {
      searchHandler.off();
      pokemonFindHandler.onChange(null);
      return;
    }

    loading.on();
    searchHandler.on();

    const pokemon = await getPokemonByName(text);

    pokemonFindHandler.onChange(pokemon);
    loading.off();
  }, 1000);

  return {
    searching,
    pokemonFind,
    onSearchPokemon,
  };
};

export default useSearchPokemon;
