import { FC, memo } from "react";
import { Avatar, Box, HStack, VStack } from "native-base";

import { Type } from "@/app/types/PokemonType";

import idNumberFormat from "@/app/utils/idNumberFormat";

import TextBold from "@/components/atoms/TextBold";
import TextLight from "@/components/atoms/TextLight";
import PokemonTypeBox from "@/components/molecules/PokemonTypeBox";

type Props = {
  id: number;
  name: string;
  types: Type[];
  imageURL: string;
  special?: boolean;
  description: string;
};

const PokemonDetailContent: FC<Props> = ({
  id,
  name,
  types,
  special,
  imageURL,
  description,
}) => (
  <VStack py={4} alignItems="center">
    <Box
      p={1}
      borderRadius="64px"
      borderWidth={!special ? 1 : 2}
      borderColor={!special ? "blueGray.200" : "yellow.500"}
    >
      <Avatar size="112px" bg="blueGray.200" source={{ uri: imageURL }} />
    </Box>
    <Box py={4} alignItems="center">
      <TextBold large uppercase>
        #{idNumberFormat(id)} - {name}
      </TextBold>
      <TextLight center>{description}</TextLight>
    </Box>
    <HStack>
      {types.map((v) => (
        <Box mr={1} key={v.slot}>
          <PokemonTypeBox key={v.slot} special={special}>
            {v.type.name}
          </PokemonTypeBox>
        </Box>
      ))}
    </HStack>
  </VStack>
);

export default memo(PokemonDetailContent);
