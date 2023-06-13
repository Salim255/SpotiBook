import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStackNavigator from "../stackNavigators/HomeStackNavigator";
import MyRewardsStackNavigator from "../stackNavigators/MyRewardsStackNavigator";
import LocationsStackNavigator from "../stackNavigators/LocationsStackNavigator";
import BottomTabNavigator from "../tabNavigators/BottomTabNavigator";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen
        name="MyRewardsStack"
        component={MyRewardsStackNavigator}
      />
      <Drawer.Screen
        name="LocationsStack"
        component={LocationsStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
