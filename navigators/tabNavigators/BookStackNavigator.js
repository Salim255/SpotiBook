import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { LinearGradient } from "expo-linear-gradient";
const Stack = createStackNavigator();

const Book = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };
  getBarCodeScannerPermissions();
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    let url = data;
    if (data) {
      setUrlString(url);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
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
        <View style={styles.headerText}>
          <Text style={styles.text}>Scan your book to borrow it </Text>
        </View>
        <View style={styles.authContent}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const BookStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Book"
        options={{ headerTransparent: true }}
        component={Book}
      />
    </Stack.Navigator>
  );
};

export default BookStackNavigator;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },
  authContent: {
    marginTop: "70%",
    marginHorizontal: 32,
    padding: 16,

    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    flex: 0.5,
    position: "relative",
  },
  headerText: {
    position: "absolute",
    top: "-60%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
