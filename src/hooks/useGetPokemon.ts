import { useEffect, useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

import useBoolean, { BooleanEvents } from "@/hooks/useBoolean";

import { PokeResult } from "@/app/types/PokeListResultType";

import removeSuffixs from "@/app/utils/removeSuffixs";
import getPokemonList from "@/app/services/getPokemonList";

const useGetPokemon = (loading: BooleanEvents) => {
  const offsetPokemon = useRef(20);

  const [scrollLoading, scrollLoadingHandler] = useBoolean(false);
  const [pokemonList, setPokemonList] = useState<PokeResult[]>([]);

  const infiniteScroll = async () => {
    scrollLoadingHandler.on();

    const pokemon = await getPokemonList({ offset: offsetPokemon.current });

    if (pokemon !== null) {
      offsetPokemon.current += 20;
      setPokemonList((data) => [...data, ...removeSuffixs(pokemon.results)]);
    }

    scrollLoadingHandler.off();
  };

  const onInitialize = async () => {
    const pokemonList = await getPokemonList();

    if (pokemonList !== null) {
      setPokemonList(removeSuffixs(pokemonList.results));
    }

    loading.off();
  };

  const onScrollList = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (scrollLoading) {
      return;
    }

    const offsetY = event.nativeEvent.contentOffset.y;
    const contentSize = event.nativeEvent.contentSize.height;
    const insetHeight = event.nativeEvent.layoutMeasurement.height;

    if (Math.ceil(offsetY + insetHeight) >= Math.ceil(contentSize)) {
      infiniteScroll();
    }
  };

  useEffect(() => {
    onInitialize();
  }, []);

  return { pokemonList, scrollLoading, onScrollList };
};

export default useGetPokemon;
