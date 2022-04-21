import { FC } from "react";
import { Box, HStack } from "native-base";

import Pokeball from "@/components/atoms/Pokeball";
import TextBold from "@/components/atoms/TextBold";
import CardContainer from "@/components/atoms/CardContainer";

export type PokemonProps = {
  name: string;
  borderRight?: boolean;
};

const PokemonCard: FC<PokemonProps> = ({ borderRight, name, children }) => {
  return (
    <CardContainer borderRightActive={!borderRight}>
      <HStack
        mb={3}
        px={2}
        py={1}
        borderRadius={12}
        alignItems="center"
        backgroundColor="blueGray.200"
      >
        <Pokeball />
        <TextBold uppercase>{name}</TextBold>
      </HStack>
      <Box>{children}</Box>
    </CardContainer>
  );
};

export default PokemonCard;
