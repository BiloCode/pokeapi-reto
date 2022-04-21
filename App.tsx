import "react-native-gesture-handler";

import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import ApplicationRouter from "@/router";

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar networkActivityIndicatorVisible backgroundColor="#1e293b" />
      <NavigationContainer>
        <ApplicationRouter />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
