import { FC, memo } from "react";
import { TouchableOpacity } from "react-native";
import { HStack } from "native-base";

import useAppNavigation from "@/hooks/useAppNavigation";

import TextBold from "@/components/atoms/TextBold";
import BarsIcon from "@/components/atoms/Icon/BarsIcon";

type Props = {
  title?: string;
};

const HeaderApplication: FC<Props> = ({ title }) => {
  const { openDrawer } = useAppNavigation();

  return (
    <HStack px={2} pt={2} pb={6} justifyContent="space-between">
      <TextBold large>{title}</TextBold>
      <TouchableOpacity onPress={openDrawer}>
        <BarsIcon color="blueGray.800" />
      </TouchableOpacity>
    </HStack>
  );
};

HeaderApplication.defaultProps = {
  title: "Poke API",
};

export default memo(HeaderApplication);
