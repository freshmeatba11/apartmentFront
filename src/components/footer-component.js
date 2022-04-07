import React from "react";
import clsx from "clsx";

const FooterComponent = ({ color }) => {
  let linkTo = "https://github.com/freshmeatba11";
  if (process.env.profileLink) {
    linkTo = process.env.profileLink;
  }
  return (
    <div
      className={clsx(
        "mx-auto w-4/5 h-[30vh] pt-24 pb-8",
        color ? "text-" + color : "text-stone-600/50",
        "grid justify-items-center items-center gap-4"
      )}
    >
      <hr
        className={clsx(
          "w-full border border-b-0",
          color ? "border-" + color : "border-stone-600/40"
        )}
      />
      <div className="tracking-[.1em]">
        Copyright © 2022 <a href={linkTo}>meatba11&#8629;</a>
      </div>
    </div>
  );
};

export default FooterComponent;
