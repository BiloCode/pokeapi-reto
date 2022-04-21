import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainRouterType } from "@/app/types/RoutesType";

import MainScreen from "@/components/screens/Main";
import DrawerMenu from "@/components/templates/DrawerMenu";
import MyPokemonListScreen from "@/components/screens/MyPokemonList";

const Drawer = createDrawerNavigator<MainRouterType>();

const MainRouter = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="MyPokemonList" component={MyPokemonListScreen} />
    </Drawer.Navigator>
  );
};

export default MainRouter;
