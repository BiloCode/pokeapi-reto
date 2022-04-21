import { FC, memo } from "react";

import useAppNavigation from "@/hooks/useAppNavigation";
import useGetDetailPokemon from "@/hooks/useGetDetailPokemon";

import TouchableText from "@/components/atoms/TouchableText";
import PokemonSprite from "@/components/molecules/PokemonSprite";
import PokemonCard, { PokemonProps } from "@/components/molecules/PokemonCard";

type Props = PokemonProps & {
  url: string;
};

const PokemonCardListLoadable: FC<Props> = ({ name, url, borderRight }) => {
  const { navigate } = useAppNavigation();
  const { detailData, loading } = useGetDetailPokemon(url);

  const onNavigateToDetail = () => {
    if (!detailData) return;

    navigate("Modal", {
      screen: "PokemonDetail",
      params: { detail: detailData },
    });
  };

  return (
    <PokemonCard name={name} borderRight={borderRight}>
      <PokemonSprite
        alt={name}
        loading={loading}
        url={detailData?.sprites.front_default}
      />

      {!loading && (
        <TouchableText onPress={onNavigateToDetail}>Ver detalles</TouchableText>
      )}
    </PokemonCard>
  );
};

export default memo(PokemonCardListLoadable);
