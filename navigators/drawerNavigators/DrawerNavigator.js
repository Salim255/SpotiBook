import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStackNavigator from "../stackNavigators/HomeStackNavigator";
import MyRewardsStackNavigator from "../stackNavigators/MyRewardsStackNavigator";
import LocationsStackNavigator from "../stackNavigators/LocationsStackNavigator";
import BottomTabNavigator from "../tabNavigators/BottomTabNavigator";
import { AuthContext } from "../../store/auth-context";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const authCtx = useContext(AuthContext);

  //console.log(authCtx);
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
