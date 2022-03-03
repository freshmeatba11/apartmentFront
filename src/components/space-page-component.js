import React from "react";
import TitleComponent from "./title-component";
import ImageSwitchComponent from "./image-switch-component";
import { imageList } from "../assets/images";

export const SpacePageComponent = () => {
  let featuredImages = imageList.p;

  return (
    <>
      <TitleComponent text="公共空間" text02=" Space /" />
      <ImageSwitchComponent images={featuredImages} />
      <div className="w-full h-12"></div>
    </>
  );
};

export default SpacePageComponent;
