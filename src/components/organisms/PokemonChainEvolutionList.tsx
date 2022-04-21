import { FC } from "react";
import { Avatar, Box, FlatList } from "native-base";

import { PokemonType } from "@/app/types/PokemonType";

import PokemonSectionHeader from "../molecules/PokemonSectionHeader";

type Props = {
  currentPokemonId: number;
  evolutionChain: PokemonType[];
};

const PokemonChainEvolutionList: FC<Props> = ({
  currentPokemonId,
  evolutionChain,
}) => {
  return (
    <Box pb={3}>
      <Box py={2}>
        <PokemonSectionHeader
          title={`Cadena Evolutiva (${evolutionChain.length})`}
        />
      </Box>
      <FlatList
        h={20}
        horizontal
        data={evolutionChain}
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <Box mx={2} h="full" justifyContent="center">
            <Box w="20px" h="4px" bg="blueGray.200" />
          </Box>
        )}
        renderItem={({ item }) => (
          <Avatar
            size={20}
            bg="blueGray.100"
            source={{ uri: item.sprites.front_default }}
            opacity={item.id === currentPokemonId ? 0.3 : 1}
          />
        )}
      />
    </Box>
  );
};

export default PokemonChainEvolutionList;
