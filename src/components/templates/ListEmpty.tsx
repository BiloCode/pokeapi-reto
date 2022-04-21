import { Box } from "native-base";

import TextLight from "@/components/atoms/TextLight";
import { FC } from "react";

type Props = {
  type?: "result" | "list";
};

const ListEmpty: FC<Props> = ({ type }) => (
  <Box py={2} flex={1} justifyContent="center" alignItems="center">
    {type === "list" && (
      <TextLight>Aun no posee ningun pokemon guardado</TextLight>
    )}

    {type === "result" && (
      <TextLight>No existen coincidencias validas</TextLight>
    )}
  </Box>
);

ListEmpty.defaultProps = {
  type: "list",
};

export default ListEmpty;
