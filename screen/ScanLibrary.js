import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Button from "../components/UI/Button";
import History from "./History";
import ScanBook from "./ScanBook";
import { getLibrary } from "../components/UI/auth";
import { AuthContext } from "../store/auth-context";

function ScanLibrary() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanToBorrow, setScanToBorrow] = useState(false);
  const [urlString, setUrlString] = useState();
  const authCtx = useContext(AuthContext);

  console.log("====================================");
  console.log(getLibrary(1));
  console.log("====================================");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleScanBookToBorrow = () => {
    setScanToBorrow(true);
    console.log("====================================");
    console.log("Hello from scan book11111", scanToBorrow);
    console.log("====================================");
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(
      `Bar code with type Salim2 ${type} and data ${data} has been scanned!`
    );
    //let url = data;
    console.log("====================================");
    console.log("Hello ", data);
    console.log("====================================");
    if (data) {
      //setUrlString(url);
      authCtx.setBarrowBook(1);
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
  if (!scanToBorrow && urlString) {
    screen = (
      <View>
        <Button onPress={handleScanBookToBorrow}>Borrow</Button>
        <Button>Return</Button>
      </View>
    );
  } else if (scanToBorrow) {
    screen = <ScanBook />;
  }

  return <View style={styles.container}>{screen}</View>;
}
export default ScanLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
