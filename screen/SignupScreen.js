import React, { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../components/UI/auth";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, pasword);
    setIsAuthenticating(false);
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
