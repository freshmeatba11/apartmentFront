import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleComponent from "./title-component";
import ImageSwitchComponent from "./image-switch-component";
import { imageList } from "../assets/images";

export const RoomDetailPageComponent = () => {
  const [currentRoom, setCurrentRoom] = useState("A");
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setCurrentRoom(params.roomNumber.toUpperCase());
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
      <TitleComponent text={`Room ${currentRoom} 室內空間 /`} />
      <ImageSwitchComponent images={featuredImages} />
      <div className="w-full h-12"></div>
    </>
  );
};

export default RoomDetailPageComponent;
