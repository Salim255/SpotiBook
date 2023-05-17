import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import Welcome from "./screen/Welcome";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient
      colors={["#041e22", "#0b4e58", "#14899b", "#51bccd", "#0bd3f1"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/back.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundIage}
      >
        <Welcome />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },
});
