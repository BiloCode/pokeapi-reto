import { Box } from "native-base";
import Loader from "../atoms/Loader";
import TextLight from "../atoms/TextLight";

const LoadingData = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Loader />
      <Box py={4}>
        <TextLight>Cargando informacion...</TextLight>
      </Box>
    </Box>
  );
};

export default LoadingData;
