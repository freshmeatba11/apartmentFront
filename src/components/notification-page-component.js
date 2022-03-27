import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import TitleComponent from "./title-component";
import MustLoginComponent from "./must-login-component";
import CreateButtonComponent from "./create-button-component";
import PostService from "../services/post.service";
import { ReactComponent as ArrowSvg } from "../assets/images/arrow.svg";

export const NotificationPageComponent = ({ currentUser }) => {
  const navigate = useNavigate();
  const [postDataArray, setPostDataArray] = useState();
  const handleRedirectToNotificationPostPage = () => {
    navigate("/info/notification/post");
  };

  useEffect(() => {
    console.log("Into useEffect...");
    PostService.get()
      .then((data) => {
        console.log("Get post data.");
        let dataArray = data.data.slice(-20);
        setPostDataArray(dataArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataForm = ({ data }) => {
    const formattedDate = new Intl.DateTimeFormat("zh", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .format(new Date(data.date))
      .replace(/\//g, ".");

    return (
      <>
        <div className="relative mx-auto w-[90%] text-white">
          <div className="text-xs italic tracking-[.05em]">{formattedDate}</div>
          <div className="flex items-center gap-2">
            {data.important && data.important === "on" && (
              <div
                className={clsx(
                  "w-8 h-5 py-[2px] px-1 rounded bg-red-500 text-xs ",
                  "shrink-0"
                )}
              >
                重要
              </div>
            )}
            <div className={clsx("text-lg font-black", "lg:text-2xl")}>
              {data.title}
            </div>
            <button
              className="block"
              onClick={() => {
                navigate(`/info/notification/${data._id}`);
              }}
            >
              <ArrowSvg />
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="infoPage">
        <TitleComponent
          text="布告欄"
          text02=" Notification Board/"
          textColor="text-white"
        />
        {!currentUser && <MustLoginComponent />}
        {currentUser && currentUser.user.role !== "roommate" && (
          <CreateButtonComponent
            redirectTo={handleRedirectToNotificationPostPage}
          />
        )}
        {currentUser && postDataArray && postDataArray.length !== 0 && (
          <div
            className={clsx(
              "mx-auto w-[90%] text-white",
              "flex flex-col-reverse gap-8",
              "lg:w-4/5 xl:w-[70%] 2xl:w-3/5"
            )}
          >
            {postDataArray.map((data) => {
              return <DataForm data={data} key={data._id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationPageComponent;
