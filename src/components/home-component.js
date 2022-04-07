import React from "react";
import clsx from "clsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";

import { imageList } from "../assets/images";
import FooterComponent from "./footer-component";

export const HomeComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        className={clsx("h-[90vh]")}
      >
        {imageList.home &&
          imageList.home.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt=""
                  className="object-cover w-full h-[90vh]"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
