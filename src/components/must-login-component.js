import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export const MustLoginComponent = () => {
  const navigate = useNavigate();
  const handleRedirectToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className={clsx(
        "mx-auto w-[80%] p-6 rounded-lg",
        "bg-black/40 text-white",
        "flex flex-col gap-3 items-center",
        "lg:w-1/2"
      )}
    >
      <p className="">You must login before seeing this page.</p>
      <button
        className="block mx-auto w-1/2 p-2 rounded bg-white/90 text-black"
        onClick={handleRedirectToLogin}
      >
        Login Here
      </button>
    </div>
  );
};

export default MustLoginComponent;
