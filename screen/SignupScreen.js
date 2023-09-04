import React, { useState, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../components/UI/auth";
import { AuthContext } from "../store/auth-context";
import { Alert, View, Text } from "react-native";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser({
        email,
        password,
      });
      authCtx.authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert("Please check your input");
    }
  }

  if (isAuthenticating) {
    return (
      <View>
        <Text>Creating User...</Text>
      </View>
    );
    //return <LoadingOverlay/>;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
