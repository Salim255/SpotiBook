import React, { useState, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import AuthForm from "./AuthForm";

import { LinearGradient } from "expo-linear-gradient";

function AuthContent({ isLogin, onAuthenticate }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [urlString, setUrlString] = useState();
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

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
    if (data) {
      setUrlString(url);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  let screen = (
    <>
      {isLogin ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
      )}

      <View style={styles.buttons}>
        {isLogin && (
          <View style={styles.btnInner}>
            <Pressable onPress={testNext}>
              <Text style={styles.btnText}>next page</Text>
            </Pressable>
          </View>
        )}
        <View style={styles.btnInner}>
          <Pressable onPress={switchAuthModeHandler}>
            <Text style={styles.btnText}>
              {isLogin ? "create anew user" : "login"}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
  {
    /* <View style={styles.authContent}>
      <View style={styles.scanner}>{screen}</View>
      
    </View> */
  }

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
      //navigation.navigate("Signup");
    } else {
      navigation.replace("Login");
      //navigation.navigate("Login");
    }
  }

  function testNext(credentilas) {
    let { email, confirmEmail, password, confirmPassword } = credentilas;
    onAuthenticate({ email, password });
  }
  function submitHandler(credentilas) {
    let { email, confirmEmail, password, confirmPassword } = credentilas;
    email = email.trim();
    password = password.trim();
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entred credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      // onAuthenticate({ email, password });
      return;
    }
    // shuld be fild with scan result credentialsInvalid
    onAuthenticate({ email, password });
  }
  return (
    <LinearGradient
      colors={["#041e22", "#0b4e58", "#14899b", "#51bccd", "#0bd3f1"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../../assets/images/back.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundIage}
      >
        <View style={styles.authContent}>{screen}</View>
      </ImageBackground>
    </LinearGradient>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 150,
    marginHorizontal: 32,
    padding: 16,

    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    flex: 0.5,
    position: "relative",
  },
  buttons: {
    position: "absolute",
    bottom: -60,
    left: "30%",
  },

  btnInner: {
    //backgroundColor: "red",
    //color: "#ff7700",
    alignItems: "center",
    padding: 6,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: 140,
  },
  btnText: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
    textTransform: "capitalize",
  },
  scanner: {
    flex: 0.5,
    justifyContent: "center",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundIage: {
    opacity: 0.7,
  },
});
