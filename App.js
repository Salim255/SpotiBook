import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect, useContext } from "react";
import AsynStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "./navigators/drawerNavigators/DrawerNavigator";
import SignupScreen from "./screen/SignupScreen";
import LoginScreen from "./screen/LoginScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import UserContextProvider from "./store/user-context";
//import AppLoading from "expo-app-loading";
//import BottomTabs from "./components/BottomTabs";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ff7700",
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <DrawerNavigator />}
    </NavigationContainer>
  );
}
function Root() {
  const [isTryLogin, setIsTryLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsynStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      if (!storedToken) {
        authCtx.authenticate("1");
      }
      setIsTryLogin(false);
    }
    fetchToken();
  }, []);

  /*  if (isTryLogin) {
    return "";
  } */

  return <Navigation />;
}
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
  backgroundIage: {
    opacity: 0.7,
  },
});
