import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";
import Library from "./Library";
import { log } from "react-native-reanimated";
function LoginScanScreen(mode) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [urlString, setUrlString] = useState();

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

    console.log("====================================");
    console.log(data.id);
    console.log("====================================");
    if (data) {
      //setUrlString(url);
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

  if (urlString) {
    screen = <Library />;
  }
  return (
    <View style={styles.container}>
      {screen}
      {/*  <Button>Scan our cart</Button> */}
    </View>
  );
}

export default LoginScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
