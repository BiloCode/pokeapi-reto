import { FC } from "react";
import { Text } from "native-base";

type Props = {
  center?: boolean;
};

const TextLight: FC<Props> = ({ children, center }) => {
  return (
    <Text
      fontSize={14}
      fontWeight={300}
      color="blueGray.500"
      textAlign={center ? "center" : "left"}
    >
      {children}
    </Text>
  );
};

export default TextLight;
