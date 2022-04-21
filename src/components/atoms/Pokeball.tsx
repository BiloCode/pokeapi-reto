import { memo } from "react";
import { Image } from "native-base";

import { PokeballImage } from "@/config/images";

const Pokeball = () => (
  <Image
    w="20px"
    h="20px"
    resizeMode="contain"
    marginRight={2}
    source={PokeballImage}
    alt="pokeball-sprite"
  />
);

export default memo(Pokeball);
