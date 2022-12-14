import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpPresenter from "./signUp.presenter";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOn, setIsOn] = useState(false);

  const onClickSignIn = () => {
    navigate("/");
  };

  const onChangeEmail = (event) => {
    const regex = new RegExp("[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]");
    if (regex.test(event.target.value) && password.length >= 8) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    const regex = new RegExp("[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]");
    if (regex.test(email) && event.target.value.length >= 8) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
    setPassword(event.target.value);
  };

  const onClickSignUp = async () => {
    try {
      await axios.post(
        "https://pre-onboarding-selection-task.shop/auth/signup",
        {
          email,
          password,
        }
      );
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SignUpPresenter
      onClickSignIn={onClickSignIn}
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignUp={onClickSignUp}
      isOn={isOn}
    />
  );
};

export default SignUpContainer;
