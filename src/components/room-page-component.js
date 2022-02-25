import React from "react";
import clsx from "clsx";
import { imageList } from "../assets/images";
import TitleComponent from "./title-component";

function Card({ imageSource, route }) {
  return (
    <div
      className={clsx(
        "w-96 h-72 rounded-lg overflow-hidden",
        "bg-gray-400 shadow-md drop-shadow-md",
        "hover:-translate-y-1 hover:scale-105 transition-transform"
      )}
    >
      <a href={route ? route : "/"} className="cursor-pointer">
        <img
          src={imageSource ? imageSource : ""}
          alt=""
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
}

export const RoomPageComponent = () => {
  return (
    <div className="">
      <TitleComponent text="Room /" />
      <div
        className={clsx(
          "w-4/5 px-10 pb-10 m-auto",
          "grid grid-cols-2 grid-rows-2 gap-6 justify-items-center"
        )}
      >
        <Card imageSource={imageList.a[0]} route="/room/a" />
        <Card imageSource={imageList.b[0]} route="/room/b" />
        <Card imageSource={imageList.c[1]} route="/room/c" />
        <Card imageSource={imageList.d[0]} route="/room/d" />
      </div>
    </div>
  );
};

export default RoomPageComponent;
