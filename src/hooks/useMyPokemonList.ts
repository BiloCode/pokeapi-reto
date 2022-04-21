import { useEffect, useState } from "react";

import useBoolean from "./useBoolean";
import usePokemonStorage from "./usePokemonStorage";

import { PokemonType } from "@/app/types/PokemonType";
import { MainRouterType } from "@/app/types/RoutesType";
import { NavigationScreen } from "@/app/types/NavigationScreen";

type PokemonScreen = NavigationScreen<MainRouterType, "MyPokemonList">;

const useMyPokemonList = (props: PokemonScreen) => {
  const { getPokemonList } = usePokemonStorage();

  const [loading, loadingHandler] = useBoolean(true);
  const [myPokemonList, setMyPokemonList] = useState<PokemonType[]>([]);

  useEffect(() => {
    const unsuscribe = props.navigation.addListener("focus", async (ev) => {
      loadingHandler.on();

      const list = await getPokemonList();

      if (list !== null) {
        setMyPokemonList(list);
      }

      loadingHandler.off();
    });

    return unsuscribe;
  }, []);

  return {
    loading,
    myPokemonList,
  };
};

export default useMyPokemonList;
