import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
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
      console.log("from loginscreeen");
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
      <View>
        <Text>Loging you in...</Text>
      </View>
    );
    //return <LoadingOverlay/>;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
