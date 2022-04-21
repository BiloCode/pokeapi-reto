import { FC } from "react";
import { Text } from "native-base";

type Props = {
  large?: boolean;
  uppercase?: boolean;
};

const TextBold: FC<Props> = ({ children, large, uppercase }) => {
  return (
    <Text
      isTruncated
      fontWeight="bold"
      color="blueGray.700"
      fontSize={large ? 18 : 15}
      textTransform={uppercase ? "uppercase" : "none"}
    >
      {children}
    </Text>
  );
};

export default TextBold;
