import { createStackNavigator } from "@react-navigation/stack";

import { ModalRouterType } from "@/app/types/RoutesType";

import PokemonDetail from "@/components/screens/PokemonDetail";

const Stack = createStackNavigator<ModalRouterType>();

const ModalRouter = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
};

export default ModalRouter;
