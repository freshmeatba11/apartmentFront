import React from "react";
import clsx from "clsx";
import TitleComponent from "./title-component";
import { useNavigate } from "react-router-dom";
import FooterComponent from "./footer-component";

const Card = ({ text01, text02, path, fake }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(path);
  };
  return (
    <div
      className={clsx(
        "h-40 w-80 rounded-full bg-white shadow-2xl",
        "relative overflow-hidden",
        fake
          ? "bg-black/50 text-white"
          : "cursor-pointer hover:-translate-y-1 hover:scale-105 transition-transform"
      )}
      onClick={clickHandler}
      title={fake ? "請先登入" : ""}
    >
      <div
        className={clsx(
          "h-full",
          "grid content-center justify-items-center",
          fake ? "opacity-50" : ""
        )}
      >
        <span className="text-4xl leading-[52px] tracking-[.14em]">
          {text01}
        </span>
        <span className="text-2xl leading-[49px]">{text02}</span>
      </div>
      {fake && fake === "true" && (
        <>
          <div
            className={clsx("absolute top-0 left-0 w-full h-full", "peer z-50")}
          ></div>
          <div
            className={clsx(
              "absolute top-0 left-0 w-full h-8 pt-1 bg-red-400 opacity-50 text-center",
              "peer-hover:opacity-100"
            )}
          >
            請先登入
          </div>
        </>
      )}
    </div>
  );
};

export const InfoPageComponent = ({ currentUser }) => {
  return (
    <div className="infoPage">
      <TitleComponent
        text="更多資訊"
        text02=" More Info /"
        textColor="text-white"
      />
      <div
        className={clsx(
          "mx-auto w-screen",
          "grid gap-10 justify-center items-center",
          "lg:grid-cols-2 lg:w-3/4 lg:pt-10 justify-items-center",
          "xl:w-1/2"
        )}
      >
        {currentUser && (
          <>
            <Card
              text01="布告欄"
              text02="Notification Board"
              path="/info/notification"
            />
            <Card text01="能源費" text02="Utility Bill" path="/info/utility" />
          </>
        )}
        <Card
          text01="垃圾車時刻表"
          text02="Trash Time & Location"
          path="/info/recycle"
        />
        <Card
          text01="生活家電指南"
          text02="Device Instruction"
          path="/info/instructions"
        />
        {!currentUser && (
          <>
            <Card
              text01="布告欄"
              text02="Notification Board"
              path=""
              fake="true"
            />
            <Card text01="能源費" text02="Utility Bill" path="" fake="true" />
          </>
        )}

        {/* <Card text01="生活機能" text02="" path="/info" /> */}
      </div>

      <FooterComponent color="white" />
    </div>
  );
};

export default InfoPageComponent;
