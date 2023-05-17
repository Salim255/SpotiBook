import { Text, StyleSheet, View } from "react-native";
import Button from "../components/UI/Button";

export default function Welcome({ handleLogin }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to spotibook libary</Text>
      <Button onPress={handleLogin}>scan your card to login</Button>
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
