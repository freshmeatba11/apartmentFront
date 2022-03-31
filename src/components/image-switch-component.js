import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
let count = 0;

const ImageSwitchComponent = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    count = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);

  const SwitchButton = ({ direction, handler }) => {
    return (
      <button
        className={clsx(
          "w-1/4 px-4 pb-3 bg-amber-900 bg-opacity-25 rounded-lg",
          "text-4xl font-black text-stone-700 text-opacity-75",
          "transition-all duration-300",
          "hover:text-stone-100 hover:bg-opacity-60",

          "absolute top-full translate-y-1/2",
          direction === "previous" ? "left-0 translate-x-1/2" : "",
          direction === "next" ? "right-0 -translate-x-1/2" : "",
          "lg:static lg:h-full lg:w-auto lg:translate-x-0 lg:translate-y-0"
        )}
        onClick={handler}
      >
        {direction === "previous" ? <span>&#10229;</span> : ""}
        {direction === "next" ? <span>&#10230;</span> : ""}
      </button>
    );
  };

  return (
    <div className="max-w-screen-xl w-11/12 mx-auto mb-20">
      <div ref={slideRef} className="w-full relative select-none">
        <div className="aspect-video flex justify-center relative">
          <SwitchButton direction="previous" handler={handleOnPrevClick} />
          <img
            src={images[currentIndex]}
            className="max-w-full rounded-lg max-h-[95vh] brightness-110"
            alt=""
          />
          <SwitchButton direction="next" handler={handleOnNextClick} />
        </div>
      </div>
    </div>
  );
};

export default ImageSwitchComponent;
