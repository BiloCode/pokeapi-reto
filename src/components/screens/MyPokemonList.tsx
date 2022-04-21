import { FC } from "react";
import { Box, FlatList } from "native-base";

import { MainRouterType } from "@/app/types/RoutesType";
import { NavigationScreen } from "@/app/types/NavigationScreen";

import useMyPokemonList from "@/hooks/useMyPokemonList";

import rowBorderActive from "@/app/utils/rowBorderActive";

import Loader from "@/components/atoms/Loader";
import ListEmpty from "@/components/templates/ListEmpty";
import ScreenContainer from "@/components/atoms/ScreenContainer";
import PokemonCardList from "@/components/organisms/PokemonCardList";
import HeaderApplication from "@/components/molecules/HeaderApplication";

type Props = NavigationScreen<MainRouterType, "MyPokemonList">;

const MyPokemonListScreen: FC<Props> = (navigationProps) => {
  const { loading, myPokemonList } = useMyPokemonList(navigationProps);

  return (
    <ScreenContainer>
      <HeaderApplication title="Mis Pokemon" />

      {loading && (
        <Box py={2}>
          <Loader />
        </Box>
      )}

      {!loading && myPokemonList.length === 0 && <ListEmpty />}

      {!loading && (
        <FlatList
          numColumns={2}
          data={myPokemonList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <PokemonCardList
              detailData={item}
              detailLockActions
              borderRight={rowBorderActive(index, myPokemonList)}
            />
          )}
        />
      )}
    </ScreenContainer>
  );
};

export default MyPokemonListScreen;
