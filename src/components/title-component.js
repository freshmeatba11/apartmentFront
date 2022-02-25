import React from "react";

const TitleComponent = ({ text }) => {
  return (
    <>
      <div className="pl-36 py-10">
        <p className="text-xl text-stone-600">{text}</p>
      </div>
    </>
  );
};

export default TitleComponent;
