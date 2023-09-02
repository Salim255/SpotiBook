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
  const [urlString, setUrlString] = useState();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

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
  let screen = (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
  );

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      console.log("from loginScreen");
      const token = await login(email, password);
      console.log(token, "hellojjj");
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
