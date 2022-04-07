import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleComponent from "./title-component";
import ImageSwitchComponent from "./image-switch-component";
import { imageList } from "../assets/images";
import FooterComponent from "./footer-component";

export const RoomDetailPageComponent = () => {
  const [currentRoom, setCurrentRoom] = useState("A");
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setCurrentRoom(params.roomNumber.toUpperCase());
    // eslint-disable-next-line
  }, []);

  let featuredImages = [];
  if (currentRoom === "A") {
    featuredImages = imageList.a;
  } else if (currentRoom === "B") {
    featuredImages = imageList.b;
  } else if (currentRoom === "C") {
    featuredImages = imageList.c;
  } else if (currentRoom === "D") {
    featuredImages = imageList.d;
  } else {
    navigate("/room");
  }

  return (
    <>
      <TitleComponent text="室內空間" text02={` Room ${currentRoom} /`} />
      <ImageSwitchComponent images={featuredImages} />

      <FooterComponent />
    </>
  );
};

export default RoomDetailPageComponent;
