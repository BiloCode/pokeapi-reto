import { FC } from "react";
import { Box } from "native-base";

import WhiteText from "@/components/atoms/WhiteText";

type Props = {
  special?: boolean;
};

const PokemonTypeBox: FC<Props> = ({ children, special }) => {
  return (
    <Box
      pb={1}
      px={4}
      borderRadius={6}
      bg={!special ? "blue.600" : "yellow.600"}
    >
      <WhiteText>{children}</WhiteText>
    </Box>
  );
};

export default PokemonTypeBox;
