import React, { useState } from "react";
import { Alert, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
      //or navigation.navigate("Signup");
    } else {
      navigation.replace("Login");
      //or navigation.navigate("Login");
    }
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

      return;
    }
    // shuld be fild with scan result credentialsInvalid
    onAuthenticate({ email, password });
  }
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default AuthContent;
