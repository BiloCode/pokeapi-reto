import { FC } from "react";
import { Box } from "native-base";

type Props = {
  borderRightActive?: boolean;
};

const CardContainer: FC<Props> = ({ children, borderRightActive }) => {
  return (
    <Box
      px={3}
      py={4}
      flex={1}
      bg="white"
      borderBottomWidth={1}
      borderColor="gray.200"
      borderRightWidth={borderRightActive ? 1 : 0}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
