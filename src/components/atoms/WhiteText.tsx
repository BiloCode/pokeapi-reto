import { FC } from "react";
import { Text } from "native-base";

const WhiteText: FC = ({ children }) => {
  return (
    <Text fontSize={13} color="white">
      {children}
    </Text>
  );
};

export default WhiteText;
