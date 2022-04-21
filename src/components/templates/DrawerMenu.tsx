import { FC } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Avatar, Box, Image, ScrollView, VStack } from "native-base";

import { DrawerImage } from "@/config/images";

import TextBold from "../atoms/TextBold";
import HomeIcon from "../atoms/Icon/HomeIcon";
import ListIcon from "../atoms/Icon/BookIcon";
import DrawerButton from "../atoms/DrawerButton";

import useAppNavigation from "@/hooks/useAppNavigation";

const height = 48;

const DrawerMenu: FC<DrawerContentComponentProps> = () => {
  const { navigate } = useAppNavigation();

  const navigateToHome = () => navigate("Drawer", { screen: "Home" });
  const navigateToList = () => navigate("Drawer", { screen: "MyPokemonList" });

  return (
    <ScrollView flex={1}>
      <Box position="relative" h={height}>
        <Box h={height / 2} bg="blueGray.200"></Box>
        <VStack w="full" position="absolute" top={10} alignItems="center">
          <Image size={24} alt="pokemon-phone" source={{ uri: DrawerImage }} />
          <Box py={3}>
            <TextBold large>Poke API</TextBold>
          </Box>
        </VStack>
      </Box>
      <Box flex={1} p={2}>
        <DrawerButton icon={<HomeIcon />} onPress={navigateToHome}>
          Inicio
        </DrawerButton>
        <DrawerButton icon={<ListIcon />} onPress={navigateToList}>
          Mis Pokemon
        </DrawerButton>
      </Box>
    </ScrollView>
  );
};

export default DrawerMenu;
