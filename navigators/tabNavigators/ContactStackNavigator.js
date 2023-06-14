import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
const Stack = createStackNavigator();

const Contact = () => (
  <LinearGradient
    colors={["#041e22", "#0b4e58", "#14899b", "#51bccd", "#0bd3f1"]}
    style={styles.rootScreen}
  >
    <ImageBackground
      source={require("../../assets/images/back.jpg")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundIage}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Contact screen!</Text>
      </View>
    </ImageBackground>
  </LinearGradient>
);

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },
});
