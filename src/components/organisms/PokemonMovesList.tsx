import { FC, memo } from "react";
import { Box, FlatList } from "native-base";

import PokemonMove from "../molecules/PokemonMove";
import PokemonSectionHeader from "../molecules/PokemonSectionHeader";

type Props = {
  moves: any[];
  special?: boolean;
};

const PokemonMovesList: FC<Props> = ({ moves, special }) => {
  return (
    <FlatList
      numColumns={2}
      data={moves}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Box my={1}></Box>}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={() => (
        <PokemonSectionHeader title={`Movimientos Pokemon (${moves.length})`} />
      )}
      renderItem={({ item, index }) => (
        <Box flex={1} ml={index % 2 !== 0 ? 2 : 0}>
          <PokemonMove special={special}>{item.move.name}</PokemonMove>
        </Box>
      )}
    />
  );
};

export default memo(PokemonMovesList);
