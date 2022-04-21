import { useEffect, useState } from "react";

import { PokemonType } from "@/app/types/PokemonType";
import { PokemonSpecieType } from "@/app/types/PokemonSpecieType";

import chainFormat from "@/app/utils/evolutionChainFormat";

import useAlert from "@/hooks/useAlert";
import useBoolean from "@/hooks/useBoolean";
import usePokemonStorage from "@/hooks/usePokemonStorage";

import getPokemonByName from "@/app/services/getPokemonByName";
import getPokemonSpecies from "@/app/services/getPokemonSpecies";
import getPokemonEvolutionChain from "@/app/services/getPokemonEvolutionChain";

type State = {
  evolutionChain: PokemonType[];
  specie: PokemonSpecieType | null;
};

const usePokemonDetail = (detail: PokemonType) => {
  const { onShowMessage } = useAlert();
  const { savePokemon } = usePokemonStorage();

  const [loading, loadingHanlder] = useBoolean(true);
  const [extraDetails, setExtraDetails] = useState<State>({
    specie: null,
    evolutionChain: [],
  });

  const onPokemonSaveInDevice = async () => {
    const isSaved = await savePokemon(detail);

    onShowMessage(
      isSaved
        ? "El Pokemon se agrego exitosamente a tu biblioteca"
        : "Este Pokemon ya se encuentra registrado"
    );
  };

  useEffect(() => {
    if (extraDetails.specie) return;

    loadingHanlder.on();

    (async () => {
      const specie = await getPokemonSpecies(detail.id);
      const evolutionChain = await getPokemonEvolutionChain(
        String(specie?.evolution_chain.url)
      );

      if (evolutionChain !== null) {
        const chainList = chainFormat(evolutionChain);
        const promiseList = chainList.map((v) => getPokemonByName(v.name));

        const requestData = await Promise.all(promiseList);
        const evolutionChainList = requestData.filter((v) => v !== null);

        setExtraDetails(() => ({
          specie,
          evolutionChain: evolutionChainList as PokemonType[],
        }));
      }

      loadingHanlder.off();
    })();
  }, []);

  return {
    loading,
    onPokemonSaveInDevice,
    specie: extraDetails.specie,
    evolutionChain: extraDetails.evolutionChain,
  };
};

export default usePokemonDetail;
