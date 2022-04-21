import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";

export type NavigationScreen<T extends ParamListBase, E extends keyof T> = {
  route: RouteProp<T, E>;
  navigation: StackNavigationProp<T, E>;
};
