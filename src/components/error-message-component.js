import React from "react";
import clsx from "clsx";

const ErrorMessageComponent = ({ message }) => {
  return (
    <div
      className={clsx(
        "w-[80%] p-6 mb-2 mx-auto bg-amber-500/40 rounded-lg",
        "text-white",
        "lg:w-1/2"
      )}
    >
      {message}
    </div>
  );
};

export default ErrorMessageComponent;
