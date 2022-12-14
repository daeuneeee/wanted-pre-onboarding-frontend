import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInPresenter from "./signIn.presenter";

const SignInContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/todo");
  }, [navigate]);

  const onClickSignUp = () => {
    navigate("/signup");
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
