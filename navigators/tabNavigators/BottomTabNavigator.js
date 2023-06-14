import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "../stackNavigators/HomeStackNavigator";
import BookStackNavigator from "../tabNavigators/BookStackNavigator";
import ContactStackNavigator from "../tabNavigators/ContactStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#85101000" },
        headerTintColor: "red",
      }}
    >
      <Tab.Screen
        name="Library"
        options={{
          headerTransparent: true,
          tabBarStyle: {
            backgroundColor: "transparent",
          },
          tabBarInactiveBackgroundColor: "transparent",
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="Borrow"
        options={{ headerTransparent: true }}
        component={BookStackNavigator}
      />
      <Tab.Screen
        name="Return"
        options={{ headerTransparent: true }}
        component={ContactStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
