import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useContext } from "react";
import Welcome from "./screen/Welcome";
import { LinearGradient } from "expo-linear-gradient";
import LoginScanScreen from "./screen/LoginScanScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "./navigators/drawerNavigators/DrawerNavigator";
import SignupScreen from "./screen/SignupScreen";
import LoginScreen from "./screen/LoginScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";

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

/* function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#814747" },
        headerTintColor: "red",
        drawerLabel: "Welcome to home",
        drawerActiveBackgroundColor: "#34d251",
        drawerActiveTintColor: "#ad207c",
        drawerStyle: { backgroundColor: "#1ed7c2" },
      }}
    >
      <Drawer.Screen
        name="Welcome"
        component={Welcome}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
} */
/* function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}  */

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <DrawerNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  /*  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  let screen = <Welcome handleLogin={handleLogin} />;
  if (login) {
    screen = <LoginScanScreen />;
  }
 */
  /*  let Render = (
    <ImageBackground
      source={require("./assets/images/back.jpg")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundIage}
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
  );
 */
  /*  options={{
    headerStyle: { backgroundColor: "#814747" },
    headerTintColor: "red",
    drawerLabel: "Welcome to home",
    drawerActiveBackgroundColor: "#34d251",
    drawerActiveTintColor: "#ad207c",
    drawerStyle: { backgroundColor: "#1ed7c2" },
  }} */
  /*   return (
    <LinearGradient
      colors={["#041e22", "#0b4e58", "#14899b", "#51bccd", "#0bd3f1"]}
      style={styles.rootScreen}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="welcome"
            component={DrawerNavigation}
          ></Stack.Screen>
          <Stack.Screen name="Hello" component={MyTabs}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  ); */

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <AuthContextProvider>
        <Navigation />
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
