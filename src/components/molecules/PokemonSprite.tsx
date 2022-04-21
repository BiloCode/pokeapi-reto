import { FC } from "react";
import { Box, Image } from "native-base";
import useBoolean from "@/hooks/useBoolean";

import Loader from "@/components/atoms/Loader";

const imageHeight = "128px";

type Props = {
  url?: string;
  alt: string;
  loading?: boolean;
};

const PokemonSprite: FC<Props> = ({ url, alt, loading }) => {
  const [imageLoading, imageLoadingHandler] = useBoolean(true);

  const isLoading = loading || imageLoading;

  return (
    <Box>
      <Image
        alt={alt}
        h={imageHeight}
        resizeMode="contain"
        onLoad={imageLoadingHandler.off}
        display={isLoading ? "none" : "flex"}
        source={{
          uri: url,
        }}
      />
      {isLoading && (
        <Box h={imageHeight} justifyContent="center" alignItems="center">
          <Loader />
        </Box>
      )}
    </Box>
  );
};

export default PokemonSprite;
