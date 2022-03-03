import React from "react";
import clsx from "clsx";
import TitleComponent from "./title-component";
import { useNavigate } from "react-router-dom";

const Card = ({ text01, text02, path }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(path);
  };
  return (
    <div
      className={clsx(
        "h-40 w-80 rounded-full bg-white shadow-2xl",
        "grid content-center justify-items-center",
        "cursor-pointer"
      )}
      onClick={clickHandler}
    >
      <span className="text-4xl leading-[52px] tracking-[.14em]">{text01}</span>
      <span className="text-2xl leading-[49px]">{text02}</span>
    </div>
  );
};

export const InfoPageComponent = () => {
  return (
    <div className="infoPage">
      <TitleComponent
        text="更多資訊"
        text02=" More Info /"
        textColor="text-white"
      />
      <div
        className={clsx(
          "w-screen mx-auto",
          "grid gap-10 justify-center items-center",
          "lg:grid-flow-col lg:pt-10",
          "xl:pt-36"
        )}
      >
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
        {/* <Card text01="生活機能" text02="" path="/info" /> */}
      </div>
    </div>
  );
};

export default InfoPageComponent;
