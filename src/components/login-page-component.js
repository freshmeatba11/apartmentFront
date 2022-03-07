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
          "w-[80%] p-6 mx-auto bg-gray-700/40 rounded-lg",
          "text-white",
          "flex flex-col gap-3",
          "lg:w-1/2"
        )}
      >
        <div className="flex flex-col gap-1">
          <label className="tracking-widest" htmlFor="email">
            Email :
          </label>
          <input
            className="bg-black bg-opacity-40 py-1 px-3 rounded"
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
            className="bg-black bg-opacity-40 py-1 px-3 rounded"
            id="password"
            type="text"
            onChange={handleChangePassword}
          />
        </div>
        <button
          className={clsx(
            "w-1/2 block p-2 mx-auto text-black bg-white bg-opacity-90 rounded "
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
