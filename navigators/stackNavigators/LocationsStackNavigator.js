import React, { useState, useEffect, useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../store/auth-context";
import UserContextProvider from "../../store/user-context";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const Locations = () => {
  const authCtx = useContext(AuthContext);
  function logout() {
    const authCtx = useContext(AuthContext);
    authCtx.logout();
  }
  return (
    <LinearGradient colors={["#000000", "#a23b04"]} style={styles.rootScreen}>
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
          <Text style={styles.detailsTitle}>Details</Text>
          <View>
            <View style={styles.itemView}>
              <Ionicons name="location" color={"#e5e1e1"} size={20} />
              <Text style={styles.detailsText}>Lille, France</Text>
            </View>
            <View style={styles.itemView}>
              <Ionicons name="person" color={"#e5e1e1"} size={20} />
              <Text style={styles.detailsText}>Age, 30 years</Text>
            </View>
            <View style={styles.itemView}>
              <Feather name="phone" color={"#e5e1e1"} size={20} />
              <Text style={styles.detailsText}>06 44 99 25 89</Text>
            </View>
            <View style={styles.itemView}>
              <Ionicons name="mail" color={"#e5e1e1"} size={20} />
              <Text style={styles.detailsText}>doshka23@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.logout}>
          <View style={styles.logoutContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
              ]}
              onPress={authCtx.logout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const LocationsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Locations"
        options={{
          headerTransparent: true,
        }}
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
    flex: 1,
  },
  detailsTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "white",
    marginLeft: 10,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 14,
    fontWeight: 700,
    color: "#e5e1e1",
    marginLeft: 5,
    marginTop: 5,
  },
  itemView: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 5,
  },
  logout: {
    flex: 1,
    marginBottom: 50,
  },
  logoutContainer: {
    flex: 1,
  },
  logoutText: {
    color: "white",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "capitalize",
    fontSize: 20,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },

  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,

    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
    marginBottom: 40,

    height: 50,

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
  },
  pressed: {
    opacity: 0.7,
  },
});
