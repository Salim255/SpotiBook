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
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="BookStack" component={BookStackNavigator} />
      <Tab.Screen name="ContactStack" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
