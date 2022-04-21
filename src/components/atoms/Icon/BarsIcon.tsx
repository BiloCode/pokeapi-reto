import { FC } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import GenericIcon, { IconProps } from "@/components/templates/GenericIcon";

const BarsIcon: FC<IconProps> = ({ size, color }) => {
  return (
    <GenericIcon as={FontAwesome5} name="bars" size={size} color={color} />
  );
};

BarsIcon.defaultProps = {
  size: "lg",
};

export default BarsIcon;
