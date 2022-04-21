import { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

import GenericIcon, { IconProps } from "@/components/templates/GenericIcon";

const HomeIcon: FC<IconProps> = ({ size, color }) => {
  return <GenericIcon as={AntDesign} name="home" size={size} color={color} />;
};

HomeIcon.defaultProps = {
  size: "lg",
};

export default HomeIcon;
