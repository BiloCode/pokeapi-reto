import { Text } from "native-base";
import { FC } from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  onPress(): void;
};

const TouchableText: FC<Props> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text w="100%" px={2} py={1} textAlign="center" color="blueGray.600">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableText;
