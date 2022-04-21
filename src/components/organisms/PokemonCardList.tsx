import { FC, memo } from "react";

import useAppNavigation from "@/hooks/useAppNavigation";

import PokemonCard from "@/components/molecules/PokemonCard";
import TouchableText from "@/components/atoms/TouchableText";
import PokemonSprite from "@/components/molecules/PokemonSprite";

import { PokemonType } from "@/app/types/PokemonType";

type Props = {
  borderRight?: boolean;
  detailData: PokemonType;
  detailLockActions?: boolean;
};

const PokemonListCard: FC<Props> = ({
  detailData,
  borderRight,
  detailLockActions,
}) => {
  const navigation = useAppNavigation();

  const onNavigateToDetail = () => {
    const detail = detailData;
    const lockActions = detailLockActions;

    navigation.navigate("Modal", {
      screen: "PokemonDetail",
      params: { lockActions, detail },
    });
  };

  return (
    <PokemonCard name={detailData.name} borderRight={borderRight}>
      <PokemonSprite
        alt={detailData.name}
        url={detailData.sprites.front_default}
      />
      <TouchableText onPress={onNavigateToDetail}>Ver detalles</TouchableText>
    </PokemonCard>
  );
};

export default memo(PokemonListCard);
