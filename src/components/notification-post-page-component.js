import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import TitleComponent from "./title-component";
import MustLoginComponent from "./must-login-component";
import ErrorMessageComponent from "./error-message-component";
import PostService from "../services/post.service";

export const NotificationPostPageComponent = ({ currentUser }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [important, setImportant] = useState("off");
  const [message, setMessage] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeImportant = () => {
    if (!important || important === "off") {
      return setImportant("on");
    }
    if (important) {
      return setImportant("off");
    }
  };

  const handleSubmit = () => {
    PostService.post(title, content, important)
      .then(() => {
        window.alert(
          "Submit successfully, now you are redirect to notification page."
        );
        navigate("/info/notification");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div className="infoPage">
      <TitleComponent
        text="發佈"
        text02=" Post Notification /"
        textColor="text-white"
      />
      {message && <ErrorMessageComponent message={message} />}
      {!currentUser && <MustLoginComponent />}
      {currentUser && currentUser.user.role === "roommate" && (
        <ErrorMessageComponent message="Only manager can write a new post." />
      )}
      {currentUser && currentUser.user.role !== "roommate" && (
        <div
          className={clsx(
            "mx-auto w-[80%] p-6 rounded-lg",
            "bg-black/40 text-white",
            "flex flex-col gap-6",
            "lg:w-1/2 xl:w-2/5 2xl:w-1/3"
          )}
        >
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="title">
              Title:
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="title"
              id="title"
              type="text"
              onChange={handleChangeTitle}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="content">
              Content:
            </label>
            <textarea
              className="py-1 px-3 rounded bg-black/90"
              name="content"
              id="content"
              rows="5"
              cols="30"
              maxLength="1000"
              autoComplete="off"
              onChange={handleChangeContent}
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <span>Tag :</span>
            <button
              className={clsx(
                "block w-12 py-1 px-2 rounded opacity-50 ",
                "bg-red-500 tracking-widest text-sm",
                "hover:scale-110",
                important === "on" ? "opacity-100" : ""
              )}
              onClick={handleChangeImportant}
            >
              重要
            </button>
          </div>
          <button
            className="block mx-auto w-1/2 p-2 rounded bg-white/90 text-black"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationPostPageComponent;
