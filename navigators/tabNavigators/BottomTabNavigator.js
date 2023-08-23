import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import HomeStackNavigator from "../stackNavigators/HomeStackNavigator";
import BookStackNavigator from "../tabNavigators/BookStackNavigator";
import ContactStackNavigator from "../tabNavigators/ContactStackNavigator";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ffff",
        tabBarInactiveTintColor: "#ff7700",
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
        },
        /*  tabBarBackground: () => (
          <LinearGradient
            colors={["#041e22", "#0b4e58", "#14899b", "#51bccd", "#0bd3f1"]}
            style={styles.rootScreen}
          ></LinearGradient>
        ), */
      }}
    >
      <Tab.Screen
        name="Library"
        options={{
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag" color={color} size={size} />
          ),
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="Borrow"
        options={{
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
        component={BookStackNavigator}
      />
      <Tab.Screen
        name="Return"
        options={{
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="refresh" color={color} size={size} />
          ),
        }}
        component={ContactStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },
});
