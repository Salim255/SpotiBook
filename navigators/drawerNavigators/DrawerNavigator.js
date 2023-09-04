import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStackNavigator from "../stackNavigators/HomeStackNavigator";
import MyRewardsStackNavigator from "../stackNavigators/MyRewardsStackNavigator";
import LocationsStackNavigator from "../stackNavigators/LocationsStackNavigator";
import BottomTabNavigator from "../tabNavigators/BottomTabNavigator";
import SpotiBookCommunity from "../stackNavigators/SpotiBookCommunity";
import Settings from "../stackNavigators/Settings";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AuthContext } from "../../store/auth-context";
import UsersContextProvider from "../../store/users-context";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const authCtx = useContext(AuthContext);

  //console.log(authCtx);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ff7700",
        },
        drawerActiveBackgroundColor: "#7c2900",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#140a04",
        headerTintColor: "#ff7700",
      }}
    >
      <Drawer.Screen
        name="SpoTiBoOk"
        options={{
          headerTransparent: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="History"
        options={{
          headerTransparent: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
        component={MyRewardsStackNavigator}
      />
      <Drawer.Screen
        name="SpotiCommunity"
        options={{
          headerTransparent: true,

          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
        component={SpotiBookCommunity}
      />

      <Drawer.Screen
        name="Profile"
        options={{
          headerTransparent: true,

          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        component={LocationsStackNavigator}
      />

      {/* <Drawer.Screen
        name="Settings"
        options={{
          headerTransparent: true,

          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
        component={Settings}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
