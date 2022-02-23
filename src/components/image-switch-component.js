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
          "px-4 py-2 text-gray-700 text-opacity-75 bg-amber-900 bg-opacity-25 rounded",
          "hover:text-stone-100 hover:bg-opacity-60",
          "before:block before:w-8 before:h-0.5 before:bg-lime-600 before:absolute before:top-7",
          "transition-all duration-300"
        )}
        onClick={handler}
      >
        {direction}
      </button>
    );
  };

  return (
    <div className="max-w-screen-xl w-4/5 mx-auto">
      <div ref={slideRef} className="w-full relative select-none">
        <div className="aspect-video">
          <img
            src={images[currentIndex]}
            className="max-w-full rounded max-h-[95vh] mx-auto brightness-110"
            alt=""
          />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-8">
          <SwitchButton direction="Prev" handler={handleOnPrevClick} />
          <SwitchButton direction="Next" handler={handleOnNextClick} />
        </div>
      </div>
    </div>
  );
};

export default ImageSwitchComponent;
