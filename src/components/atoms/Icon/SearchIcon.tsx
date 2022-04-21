import { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

import GenericIcon, { IconProps } from "@/components/templates/GenericIcon";

const SearchIcon: FC<IconProps> = ({ size, color }) => {
  return (
    <GenericIcon as={AntDesign} name="search1" size={size} color={color} />
  );
};

SearchIcon.defaultProps = {
  size: "md",
};

export default SearchIcon;
