import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Button from "../components/UI/Button";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button>scan your card to login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
