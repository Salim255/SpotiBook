import React, { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser, login } from "../components/UI/auth";
import { AuthContext } from "../store/auth-context";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, pasword);
      authCtx.authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert("Please check your input");
    }
  }

  if (isAuthenticating) {
    return (
      <View>
        <Text>Loging you in...</Text>
      </View>
    );
    //return <LoadingOverlay/>;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
