import { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

import GenericIcon, { IconProps } from "@/components/templates/GenericIcon";

const ArrowLeftIcon: FC<IconProps> = ({ size, color }) => {
  return (
    <GenericIcon as={AntDesign} name="arrowleft" size={size} color={color} />
  );
};

ArrowLeftIcon.defaultProps = {
  size: "lg",
};

export default ArrowLeftIcon;
