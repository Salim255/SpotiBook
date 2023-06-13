import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import ScanLibrary from "./ScanLibrary";

function Library() {
  const [scanLibrary, setScanLibrary] = useState(false);
  const handlScanLibrary = () => {
    setScanLibrary(!scanLibrary);
  };
  let screen = <Button onPress={handlScanLibrary}>Scan Library</Button>;
  if (scanLibrary) {
    screen = <ScanLibrary />;
  }
  return <View style={styles.container}>{screen}</View>;
}
export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "#ffff",
  },
});
