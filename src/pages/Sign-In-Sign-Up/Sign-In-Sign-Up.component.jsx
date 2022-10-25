import React from "react";
import { SignInAndSignUpContainer } from "./Sign-In-Sign-Up.style";
import SignIn from "../../component/SignIn/SignIn.component";
const SignInSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <img src="../../assets/react-logo.png" alt="" />
    </SignInAndSignUpContainer>
  );
};

export default SignInSignUp;
