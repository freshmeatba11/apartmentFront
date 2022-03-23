import React from "react";
import clsx from "clsx";

export const CreateButtonComponent = ({ redirectTo }) => {
  return (
    <button
      className={clsx(
        "fixed bottom-10 right-10 z-50",
        "block py-[7px] px-[10px] rounded-full bg-white/90 text-3xl text-black"
      )}
      onClick={redirectTo}
    >
      &#65291;
    </button>
  );
};

export default CreateButtonComponent;
