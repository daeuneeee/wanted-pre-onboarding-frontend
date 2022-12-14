import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInPresenter from "./signIn.presenter";

const SignInContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOn, setIsOn] = useState(false);

  const onClickSignUp = () => {
    navigate("/signup");
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

  const onClickSignIn = async () => {
    try {
      const result = await axios.post(
        "https://pre-onboarding-selection-task.shop/auth/signin",
        {
          email,
          password,
        }
      );
      localStorage.setItem("accessToken", result.data.access_token);
      navigate("/todo");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SignInPresenter
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignUp={onClickSignUp}
      isOn={isOn}
      onClickSignIn={onClickSignIn}
    />
  );
};

export default SignInContainer;
