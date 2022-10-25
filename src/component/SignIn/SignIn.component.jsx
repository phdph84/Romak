import React, { useState } from "react";
import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from "./SignIn.style";
import FormInput from "../Form-Input/Form-Input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";
import { emailSignInStart } from "../../Redux/user/user.actions";
import { connect } from "react-redux/es/exports";
const SignIn = ({ emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const { username, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(username, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>اکانت کاربری دارم</SignInTitle>
      <span className="title">ورود با استفاده از نام کاربری و رمز عبور</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="username"
          type="text"
          handleChange={handleChange}
          value={username}
          label="نام کاربری"
          required
        />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="پسورد"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">ورود</CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (username, password) =>
    dispatch(emailSignInStart({ username, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
