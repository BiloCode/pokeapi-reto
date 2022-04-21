import { useEffect, useState, useRef } from "react";

import useBoolean from "@/hooks/useBoolean";

import getPokemon from "@/app/services/getPokemon";

import { PokemonType } from "@/app/types/PokemonType";

const useGetDetailPokemon = (url: string) => {
  const controller = useRef(new AbortController());

  const [loading, loadingHandler] = useBoolean(true);
  const [detailData, setDetailData] = useState<PokemonType>();

  useEffect(() => {
    if (detailData) return;

    controller.current = new AbortController();

    (async () => {
      loadingHandler.on();

      const pokemonData = await getPokemon(url, controller.current.signal);

      if (pokemonData !== null) {
        setDetailData(pokemonData);
      }

      loadingHandler.off();
    })();

    return () => controller.current.abort();
  }, []);

  return {
    loading,
    detailData,
  };
};

export default useGetDetailPokemon;
