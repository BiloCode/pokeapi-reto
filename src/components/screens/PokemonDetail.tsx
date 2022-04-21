import { FC, useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { Button, HStack } from "native-base";

import textTruncate from "@/app/utils/textTruncate";

import { ModalRouterType } from "@/app/types/RoutesType";
import { NavigationScreen } from "@/app/types/NavigationScreen";

import usePokemonDetail from "@/hooks/usePokemonDetail";
import useAppNavigation from "@/hooks/useAppNavigation";

import LoadingData from "@/components/templates/LoadingData";
import PokemonMovesList from "@/components/organisms/PokemonMovesList";
import ScreenContainer from "@/components/atoms/ScreenContainer";
import ArrowLeftIcon from "@/components/atoms/Icon/ArrowLeftIcon";
import PokemonDetailContent from "@/components/organisms/PokemonDetailContent";
import PokemonChainEvolutionList from "@/components/organisms/PokemonChainEvolutionList";

type Props = NavigationScreen<ModalRouterType, "PokemonDetail">;

const PokemonDetail: FC<Props> = ({ route }) => {
  const detail = route.params.detail;
  const lockActions = route.params.lockActions;

  const { goBack } = useAppNavigation();
  const { loading, evolutionChain, specie, onPokemonSaveInDevice } =
    usePokemonDetail(detail);

  const isSpecial = specie?.is_legendary || specie?.is_mythical;

  const description = useMemo(() => {
    const textEntries = specie?.flavor_text_entries;

    const spanish = textEntries?.find((v) => v.language.name === "es");
    const english = textEntries?.find((v) => v.language.name === "en");

    if (!spanish) {
      return english?.flavor_text || "Sin descripcion...";
    }

    return spanish.flavor_text;
  }, [specie]);

  return (
    <ScreenContainer>
      <HStack h={12} px={3} justifyContent="space-between" alignItems="center">
        <TouchableOpacity onPress={goBack}>
          <ArrowLeftIcon color="blueGray.700" />
        </TouchableOpacity>
        {!lockActions && !loading && (
          <Button
            py={1}
            px={6}
            variant="outline"
            colorScheme="blue"
            onPress={onPokemonSaveInDevice}
          >
            Guardar
          </Button>
        )}
      </HStack>
      {loading && <LoadingData />}
      {!loading && (
        <>
          <PokemonDetailContent
            id={detail.id}
            name={detail.name}
            special={isSpecial}
            types={detail.types}
            imageURL={detail.sprites.front_default}
            description={String(textTruncate(description))}
          />

          {!isSpecial && (
            <PokemonChainEvolutionList
              currentPokemonId={detail.id}
              evolutionChain={evolutionChain}
            />
          )}
          <PokemonMovesList special={isSpecial} moves={detail.moves} />
        </>
      )}
    </ScreenContainer>
  );
};

export default PokemonDetail;
