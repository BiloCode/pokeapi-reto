import { FC } from "react";
import { Icon } from "native-base";

import { ColorType } from "@/app/types/ColorType";

export type IconSize = "sm" | "md" | "lg";

export type IconProps = {
  size?: IconSize;
  color?: ColorType;
};

type Props = IconProps & {
  as: any;
  name: string;
};

const GenericIcon: FC<Props> = ({ as, name, size, color }) => {
  const iconSize = (() => {
    if (size === "lg") return "24px";
    if (size === "md") return "18px";

    return "14px";
  })();

  return <Icon as={as} name={name} size={iconSize} color={color} />;
};

GenericIcon.defaultProps = {
  size: "md",
};

export default GenericIcon;
