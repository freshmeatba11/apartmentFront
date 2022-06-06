import React from "react";
import clsx from "clsx";
import FooterComponent from "./footer-component";
import { useNavigate } from "react-router-dom";

export const NotMatchComponent = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <div className="infoPage">
      <div
        className={clsx(
          "w-full h-screen",
          "text-white",
          "grid place-content-center justify-items-center gap-6"
        )}
      >
        <h2 className="text-3xl">404 Page not found.</h2>
        <button
          className={clsx(
            "w-fit py-4 px-8",
            "rounded-full border border-transparent bg-white text-black text-2xl",
            "transition-all duration-300",
            "hover:border-white hover:bg-black hover:text-white"
          )}
          onClick={clickHandler}
        >
          回到前一頁
        </button>
      </div>
      <FooterComponent color="white" />
    </div>
  );
};

export default NotMatchComponent;
