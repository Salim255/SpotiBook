import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { BarCodeScanner } from "expo-barcode-scanner";
import BookDetailsModal from "../../components/UI/BookDetailsModal";
import { AuthContext } from "../../store/auth-context";
import { getScanLibrary } from "../../util/http";
import { testSalim } from "../../util/http";
const Stack = createStackNavigator();

const Home = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [popBookDetails, setPopBookDetails] = useState(false);
  const authCtx = useContext(AuthContext);
  const [scannedLibary, setLibrary] = useState(null);

  useEffect(() => {
    console.log("====================================");
    console.log("Hello Again libary");
    console.log("====================================");
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  /*  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  }; */
  //getBarCodeScannerPermissions();
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    alert(
      `Bar code with type library ${type} and data ${data} has been scanned!`
    );
    let url = data;
    console.log("====================================");
    console.log("url", data, "url", url);
    console.log("====================================");

    async function getLib() {
      const library = await testSalim(1);
      console.log("====================================");
      console.log(library, "👾👾👾");
      console.log("====================================");
    }
    getLib();

    //sendSimple();
    //authCtx.getLibrary();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const testNext = () => {
    setPopBookDetails(!popBookDetails);
  };
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
          <Text style={styles.text}>
            Scan your library to borrow or return books{" "}
          </Text>
          <View>
            <Pressable onPress={testNext}>
              <Text style={styles.btnText}>book details</Text>
            </Pressable>
          </View>
        </View>

        {popBookDetails ? (
          <BookDetailsModal />
        ) : (
          <View style={styles.authContent}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
        )}
      </ImageBackground>
    </LinearGradient>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: "transparent",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

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
