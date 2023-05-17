import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
function LoginScanScreen() {
  return (
    <View style={styles.container}>
      <Button>Scan our cart</Button>
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
