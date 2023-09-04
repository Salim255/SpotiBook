import React, { useContext, useState, useEffect } from "react";

import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../components/UI/auth";
import { AuthContext } from "../store/auth-context";
import { BarCodeScanner } from "expo-barcode-scanner";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [userId, setUserId] = useState("");
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    console.log("====================================");
    console.log("Hello From loginScreen useEffect");
    console.log("====================================");
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log("====================================");
    console.log(data, data.id);
    console.log("====================================");

    alert(
      `Bar code with type Salimllll ${type} and data ${data} has been scanned!`
    );
    let url = data;
    console.log("====================================");
    console.log(url, "data👻👻👻");
    console.log("====================================");
    if (data) {
      //setUrlString(url);
      setUserId(data.id);
      authCtx.getUserId(data.id);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  let screen = (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
  );

  async function loginHandler() {
    console.log("====================================");
    console.log(userId, "hello user id ");
    console.log("====================================");
    setIsAuthenticating(true);
    try {
      console.log("from loginScreen");
      //const  handleBarCodeScanned();
      const token = await login();
      console.log("====================================");
      console.log(token, "Hello login token");
      console.log("====================================");
      if (!token) {
        authCtx.authenticate("1");
      }
      authCtx.authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert("Please check your input");
    }
  }

  if (isAuthenticating) {
    return (
      <LinearGradient
        colors={["#041e22", "#0b4e58", "#14899b", "#51bccd", "#0bd3f1"]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../assets/images/back.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundIage}
        >
          <View>
            <Text>Loging you in...</Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    );
    //return <LoadingOverlay/>;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },
});
