import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { AppRouterType } from "@/app/types/RoutesType";

type NavigationRouter = StackNavigationProp<AppRouterType>;

const useAppNavigation = () => {
  const navigation = useNavigation<NavigationRouter>();

  const goBack = navigation.goBack;
  const navigate = navigation.navigate;

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());

  return {
    goBack,
    navigate,
    openDrawer,
    closeDrawer,
  };
};

export default useAppNavigation;
