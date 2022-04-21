import { FC } from "react";
import { Box, HStack, Text } from "native-base";

const PokemonMove: FC = ({ children }) => (
  <HStack
    h={8}
    borderWidth={1}
    borderRadius={4}
    alignItems="center"
    borderColor="blueGray.300"
  >
    <Box w={3} h="full" bg="blueGray.200"></Box>
    <Box px={2}>
      <Text color="blueGray.500" isTruncated>
        {children}
      </Text>
    </Box>
  </HStack>
);

export default PokemonMove;
