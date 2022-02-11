import React from "react";
import clsx from "clsx";
import testPic from "../assets/images/testHome01.jpg";

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
        <p className="text-xl text-gray-400">Room /</p>
      </div>
      <div
        className={clsx(
          "w-4/5 px-10 pb-10 m-auto",
          "grid grid-cols-2 grid-rows-2 gap-6 justify-items-center"
        )}
      >
        <Card imageSource={testPic} route="/room/a" />
        <Card imageSource={testPic} route="/room/b" />
        <Card imageSource={testPic} route="/room/c" />
        <Card imageSource={testPic} route="/room/d" />
      </div>
    </div>
  );
};

export default RoomPageComponent;
