import clsx from "clsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import TitleComponent from "./title-component";
import ErrorMessageComponent from "./error-message-component";

export const LoginPageComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    AuthService.login(email, password)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        setCurrentUser(AuthService.getCurrentUser());
        window.alert(
          "Login successfully, you are now redirected to the notification page."
        );
        navigate("/notification");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div className="infoPage">
      <TitleComponent text="登入" text02=" Login /" textColor="text-white" />
      {message && <ErrorMessageComponent message={message} />}

      <div
        className={clsx(
          "mx-auto w-[80%] p-6 rounded-lg",
          "bg-black/40 text-white",
          "flex flex-col gap-6",
          "lg:w-1/2 xl:w-2/5 2xl:w-1/3"
        )}
      >
        <div className="flex flex-col gap-1">
          <label className="tracking-widest" htmlFor="email">
            Email :
          </label>
          <input
            className="py-1 px-3 rounded bg-black/90"
            id="email"
            type="email"
            onChange={handleChangeEmail}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="tracking-widest" htmlFor="password">
            Password :
          </label>
          <input
            className="py-1 px-3 rounded bg-black/90"
            id="password"
            type="text"
            onChange={handleChangePassword}
          />
        </div>
        <button
          className={clsx(
            "block mx-auto w-1/2 p-2 rounded bg-white/90 text-black"
          )}
          onClick={handleLogin}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LoginPageComponent;
