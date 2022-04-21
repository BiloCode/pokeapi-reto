import { FC } from "react";
import { HStack } from "native-base";

import Pokeball from "@/components/atoms/Pokeball";
import TextBold from "@/components/atoms/TextBold";

type Props = {
  title: string;
};

const PokemonSectionHeader: FC<Props> = ({ title }) => {
  return (
    <HStack bg="white" py={3} alignItems="center">
      <Pokeball />
      <TextBold>{title}</TextBold>
    </HStack>
  );
};

export default PokemonSectionHeader;
