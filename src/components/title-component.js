import React from "react";
import clsx from "clsx";

const TitleComponent = ({ text, text02, textColor }) => {
  return (
    <>
      <div className="px-12 py-8 md:pl-24 md:py-16">
        <span
          className={clsx(
            textColor ? textColor : "text-stone-600",
            "text-xl tracking-[.14em] leading-[52px]",
            "md:text-4xl"
          )}
        >
          {text}
        </span>
        {text02 && (
          <span
            className={clsx(
              textColor ? textColor : "text-stone-600",
              "text-lg leading-[52px]",
              "md:text-2xl"
            )}
          >
            {text02}
          </span>
        )}
      </div>
    </>
  );
};

export default TitleComponent;
