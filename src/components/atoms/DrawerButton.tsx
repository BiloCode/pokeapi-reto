import { FC } from "react";
import { Box, HStack, Pressable } from "native-base";

import TextLight from "./TextLight";

type Props = {
  icon: JSX.Element;
  onPress?(): void;
};

const DrawerButton: FC<Props> = ({ onPress, icon, children }) => {
  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => (
        <HStack
          p={4}
          alignItems="center"
          borderBottomWidth={1}
          borderColor="gray.100"
          bg={isPressed ? "gray.100" : "white"}
        >
          <Box mr={3}>{icon}</Box>
          <TextLight>{children}</TextLight>
        </HStack>
      )}
    </Pressable>
  );
};

export default DrawerButton;
