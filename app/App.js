import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, OnBordingScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./context/store";
import ProductScreen from "./screens/ProductScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBordingScreen" component={OnBordingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
