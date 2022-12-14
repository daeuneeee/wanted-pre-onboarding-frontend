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
    setEmail(event.target.value);
    if (email.includes("@") && password.length >= 7) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (email.includes("@") && password.length >= 7) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
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
