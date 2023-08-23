import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
const Stack = createStackNavigator();

const Locations = () => (
  <LinearGradient
    colors={["#ff8848", "#1c1c1c", "#ff9558", "#fe991d", "#e6670b"]}
    style={styles.rootScreen}
  >
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profilePhoto}>
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              resizeMode: "cover",
              borderColor: "#ff7700",
              borderWidth: 5,
            }}
          />
          <Text style={styles.profileName}>Salim Hassan</Text>
        </View>
      </View>
    </View>
    <View style={styles.profileContent}>
      <View>
        <Text style={styles.detailsText}>Details</Text>
        <Text style={styles.detailsText}>From Lille</Text>
      </View>
    </View>
  </LinearGradient>
);

const LocationsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Locations"
        options={{ headerTransparent: true }}
        component={Locations}
      />
    </Stack.Navigator>
  );
};

export default LocationsStackNavigator;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },
  profileContainer: {
    // backgroundColor: "red",
    //flex: 1,
    //marginTop: "30%",
  },
  profileHeader: {
    backgroundColor: "#fcfcfc",
    height: "50%",
    position: "relative",
    // flex: 2,
  },
  profilePhoto: {
    position: "absolute",
    left: "10%",
    top: "50%",
  },
  profileName: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
    marginTop: 10,
  },
  profileContent: {
    marginTop: -90,
  },
  detailsText: {
    fontSize: 14,
    fontWeight: 700,
    color: "white",
    marginTop: 10,
    margin: 10,
  },
});
