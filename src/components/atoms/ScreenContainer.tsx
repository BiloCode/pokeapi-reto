import { FC } from "react";
import { Box } from "native-base";

const ScreenContainer: FC = ({ children }) => (
  <Box px={4} py={6} flex={1} bg="white">
    {children}
  </Box>
);

export default ScreenContainer;
