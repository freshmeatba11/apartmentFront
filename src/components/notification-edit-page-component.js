import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import TitleComponent from "./title-component";
import MustLoginComponent from "./must-login-component";
import ErrorMessageComponent from "./error-message-component";
import PostService from "../services/post.service";
import FooterComponent from "./footer-component";

export const NotificationEditPageComponent = ({ currentUser }) => {
  let params = useParams();
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

  const handleSave = () => {
    PostService.patch(params._id, title, content, important)
      .then(() => {
        window.alert(
          "Save successfully, now you are redirect to notification page."
        );
        navigate(`/info/notification/${params._id}`);
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  const handleDelete = () => {
    let result = window.confirm("Are you sure you want to delete it?");
    if (result) {
      PostService.delete(params._id)
        .then(() => {
          window.alert(
            "Delete success. Now you are redirect to notification page."
          );
          navigate("/info/notification");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCancel = () => {
    let result = window.confirm("Are you sure you want to leave without save?");
    if (result) {
      navigate(`/info/notification/${params._id}`);
    }
  };

  useEffect(() => {
    console.log("Into useEffect...");
    PostService.getById(params._id)
      .then((data) => {
        console.log("Get post by id data.");
        setTitle(data.data.title);
        setContent(data.data.content);
        setImportant(data.data.important);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="infoPage">
      <TitleComponent
        text="修改"
        text02=" Edit Notification /"
        textColor="text-white"
      />
      {message && <ErrorMessageComponent message={message} />}
      {!currentUser && <MustLoginComponent />}
      {currentUser && currentUser.user.role === "roommate" && (
        <ErrorMessageComponent message="Only manager can edit post." />
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
              value={title}
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
              value={content}
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
            className="mx-auto w-1/2 p-2 rounded bg-white/90 text-black"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="mx-auto w-1/2 p-2 rounded bg-white/90 text-black"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="mx-auto w-1/2 p-2 rounded bg-red-500/90 text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}

      <FooterComponent color="white" />
    </div>
  );
};

export default NotificationEditPageComponent;
