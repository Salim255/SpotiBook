import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screen/Welcome";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a", "#072167", "#020f34"]}
      style={styles.rootScreen}
    >
      <Welcome />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
