import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import TitleComponent from "./title-component";
import MustLoginComponent from "./must-login-component";
import ErrorMessageComponent from "./error-message-component";
import PostService from "../services/post.service";
import FooterComponent from "./footer-component";

export const NotificationDetailPageComponent = ({ currentUser }) => {
  let params = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [important, setImportant] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const formatDate = (originalDate) => {
    if (!isNaN(Date.parse(originalDate))) {
      return new Intl.DateTimeFormat("zh", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
        .format(new Date(originalDate))
        .replace(/\//g, ".");
    } else {
      return setMessage("Post not Found.");
    }
  };

  const EditButtonComponent = ({ redirectTo }) => {
    return (
      <button
        className={clsx(
          "fixed bottom-10 right-10 z-50",
          "block py-[7px] px-[11.5px] rounded-full bg-white/90 text-3xl text-black",
          "rotate-180"
        )}
        onClick={redirectTo}
      >
        &#10000;
      </button>
    );
  };
  const handleRedirectToNotificationEditPage = () => {
    navigate(`/info/notification/edit/${params._id}`);
  };

  useEffect(() => {
    console.log("Into useEffect...");
    PostService.getById(params._id)
      .then((data) => {
        console.log("Get post by id data.");
        setDate(formatDate(data.data.date));
        setTitle(data.data.title);
        setContent(data.data.content);
        setImportant(data.data.important);
        setAuthor(data.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="infoPage">
      <TitleComponent
        text="布告欄"
        text02=" Notification Board/"
        textColor="text-white"
      />
      {!currentUser && <MustLoginComponent />}
      {currentUser && currentUser.user.role !== "roommate" && (
        <EditButtonComponent
          redirectTo={handleRedirectToNotificationEditPage}
        />
      )}
      {message && <ErrorMessageComponent message={message} />}
      {currentUser && title && (
        <div
          className={clsx(
            "mx-auto w-[75%] p-8 rounded-[1.6rem] bg-black/40 text-white",
            "lg:w-4/5 xl:w-[70%] 2xl:w-3/5"
          )}
        >
          <div className="relative grid gap-4 text-white">
            <div>
              <div className="text-xs italic tracking-[.05em]">{date}</div>
              <div className="flex items-center gap-2">
                {important && important === "on" && (
                  <div
                    className={clsx(
                      "w-8 h-5 py-0.5 px-1 rounded bg-red-500 text-xs",
                      "shrink-0"
                    )}
                  >
                    重要
                  </div>
                )}
                <div className={clsx("text-lg font-black", "lg:text-2xl")}>
                  {title}
                </div>
              </div>
            </div>
            <hr className="" />
            <div className="">{content}</div>
            <div className="text-right">From {author.username}</div>
          </div>
        </div>
      )}

      <FooterComponent color="white" />
    </div>
  );
};

export default NotificationDetailPageComponent;
