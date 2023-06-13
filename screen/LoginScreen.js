import React, { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser, login } from "../components/UI/auth";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await login(email, pasword);
    setIsAuthenticating(false);
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
