import { Box, FlatList, HStack } from "native-base";

import rowBorderActive from "@/app/utils/rowBorderActive";

import useBoolean from "@/hooks/useBoolean";
import useGetPokemon from "@/hooks/useGetPokemon";
import useSearchPokemon from "@/hooks/useSearchPokemon";

import TextLight from "@/components/atoms/TextLight";
import SearchBar from "@/components/molecules/SearchBar";
import ListEmpty from "@/components/templates/ListEmpty";
import CardContainer from "@/components/atoms/CardContainer";
import LoadingData from "@/components/templates/LoadingData";
import ScreenContainer from "@/components/atoms/ScreenContainer";
import PokemonCardList from "@/components/organisms/PokemonCardList";
import HeaderApplication from "@/components/molecules/HeaderApplication";
import PokemonCardListLoadable from "@/components/organisms/PokemonCardListLoadable";

const MainScreen = () => {
  const [loading, handler] = useBoolean(true);

  const { pokemonList, scrollLoading, onScrollList } = useGetPokemon(handler);
  const { pokemonFind, searching, onSearchPokemon } = useSearchPokemon(handler);

  return (
    <ScreenContainer>
      <Box mb={4}>
        <HeaderApplication title="Inicio" />
        <SearchBar disabled={scrollLoading} onChangeText={onSearchPokemon} />
      </Box>

      {loading && <LoadingData />}

      {!loading && (
        <>
          {searching && pokemonFind && (
            <HStack>
              <PokemonCardList detailData={pokemonFind} />
              <CardContainer></CardContainer>
            </HStack>
          )}

          {searching && !pokemonFind && <ListEmpty type="result" />}

          {!searching && (
            <FlatList
              numColumns={2}
              data={pokemonList}
              onScroll={onScrollList}
              keyExtractor={(_, index) => index.toString()}
              ListFooterComponent={() => (
                <Box py={3} alignItems="center">
                  <TextLight>Cargando nuevos resultados...</TextLight>
                </Box>
              )}
              renderItem={({ item, index }) => (
                <PokemonCardListLoadable
                  url={item.url}
                  name={item.name}
                  borderRight={rowBorderActive(index, pokemonList)}
                />
              )}
            />
          )}
        </>
      )}
    </ScreenContainer>
  );
};

export default MainScreen;
