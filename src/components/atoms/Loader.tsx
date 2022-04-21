import { Spinner } from "native-base";
import { FC } from "react";

type Props = {
  small?: boolean;
};

const Loader: FC<Props> = ({ small }) => (
  <Spinner size={small ? "sm" : "lg"} color="blueGray.600" />
);

export default Loader;
