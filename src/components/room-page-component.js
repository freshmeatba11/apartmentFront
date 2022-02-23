import React from "react";
import clsx from "clsx";
import testPic from "../assets/images/testHome01.jpg";
import { imageList } from "../assets/images";

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
      <div className="pl-36 py-10">
        <p className="text-xl text-stone-600">Room /</p>
      </div>
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
