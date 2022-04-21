import { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

import GenericIcon, { IconProps } from "@/components/templates/GenericIcon";

const BookIcon: FC<IconProps> = ({ size, color }) => {
  return <GenericIcon as={AntDesign} name="book" size={size} color={color} />;
};

BookIcon.defaultProps = {
  size: "lg",
};

export default BookIcon;
