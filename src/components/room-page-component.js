import React from "react";
import clsx from "clsx";
import { imageList } from "../assets/images";
import TitleComponent from "./title-component";

function Card({ imageSource, route }) {
  return (
    <div
      className={clsx(
        "w-[80vw] rounded-lg overflow-hidden",
        "bg-gray-400 shadow-md drop-shadow-md",
        "lg:w-[40vw]"
      )}
    >
      <a
        href={route ? route : "/"}
        className={clsx(
          "cursor-pointer block w-full h-full",
          "hover:-translate-y-1 hover:scale-105 transition-transform"
        )}
      >
        <img
          src={imageSource ? imageSource : ""}
          alt=""
          className="w-full h-full object-cover brightness-110"
        />
      </a>
    </div>
  );
}

export const RoomPageComponent = () => {
  return (
    <>
      <TitleComponent text="房型" text02=" Room /" />
      <div
        className={clsx(
          "pb-10",
          "grid gap-6 justify-center grid-flow-row",
          "lg:grid-flow-col lg:grid-rows-2"
        )}
      >
        <Card imageSource={imageList.a[0]} route="/room/a" />
        <Card imageSource={imageList.b[0]} route="/room/b" />
        <Card imageSource={imageList.c[1]} route="/room/c" />
        <Card imageSource={imageList.d[0]} route="/room/d" />
      </div>
    </>
  );
};

export default RoomPageComponent;
