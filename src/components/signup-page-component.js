import clsx from "clsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import TitleComponent from "./title-component";
import ErrorMessageComponent from "./error-message-component";

export const SignupPageComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("roommate");
  const [message, setMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert(
          "registration succeeds. You are now redirected to login page."
        );
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div className="infoPage">
      <TitleComponent text="註冊" text02=" Sign Up /" textColor="text-white" />
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
          <label className="tracking-widest" htmlFor="username">
            User Name :
          </label>
          <input
            className="bg-black bg-opacity-40 py-1 px-3 rounded"
            id="username"
            type="text"
            onChange={handleChangeUsername}
          />
        </div>
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
        <div className="flex flex-col gap-1">
          <label className="tracking-widest" htmlFor="role">
            Role :
          </label>
          <input
            className="bg-black bg-opacity-40 py-1 px-3 rounded"
            id="role"
            type="text"
            placeholder="Roommate"
            disabled
          />
        </div>
        <button
          className={clsx(
            "w-1/2 block p-2 mx-auto text-black bg-white bg-opacity-90 rounded "
          )}
          onClick={handleRegister}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SignupPageComponent;
