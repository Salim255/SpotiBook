import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Button from "../components/UI/Button";
import BookDetailsModal from "../components/UI/BookDetailsModal";

function ScanBook() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanToBorrow, setScanToBorrow] = useState(false);
  const [urlString, setUrlString] = useState();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleScanBookToBorrow = () => {
    setScanToBorrow(!scanToBorrow);
    console.log("====================================");
    console.log("Hello from scan bookaaaaa");
    console.log("====================================");
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    let url = data;
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
    screen = <BookDetailsModal />;
  }

  return <View style={styles.container}>{screen}</View>;
}
export default ScanBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
