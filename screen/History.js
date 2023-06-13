import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function History() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanToBorrow, setScanToBorrow] = useState(false);
  const [urlString, setUrlString] = useState();

  return (
    <View>
      <Text>Hello from History</Text>
    </View>
  );
}

export default History;
