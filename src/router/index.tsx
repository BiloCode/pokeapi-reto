import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppRouterType } from "@/app/types/RoutesType";

import MainRouter from "@/router/MainRouter";
import ModalRouter from "@/router/ModalRouter";

const Stack = createStackNavigator<AppRouterType>();

const ApplicationRouter: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Modal" component={ModalRouter} />
      <Stack.Screen name="Drawer" component={MainRouter} />
    </Stack.Navigator>
  );
};

export default ApplicationRouter;
