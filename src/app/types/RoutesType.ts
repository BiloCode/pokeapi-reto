import { NavigatorScreenParams } from "@react-navigation/native";

import { PokemonType } from "@/app/types/PokemonType";

export type MainRouterType = {
  Home: undefined;
  MyPokemonList: undefined;
};

export type ModalRouterType = {
  PokemonDetail: {
    detail: PokemonType;
    lockActions?: boolean;
  };
};

export type AppRouterType = {
  Modal: NavigatorScreenParams<ModalRouterType>;
  Drawer: NavigatorScreenParams<MainRouterType>;
};
