import React from "react";
import TitleComponent from "./title-component";
import FooterComponent from "./footer-component";

export const ReservePageComponent = () => {
  return (
    <div className="infoPage">
      <TitleComponent text="預約" text02=" Reserve /" textColor="text-white" />
      <div className="flex justify-center w-full">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSco3rNNBakAbZ9g4he2pgqMAxR3PxA5CMswyS5KPuyauI1AyQ/viewform?embedded=true"
          width="640"
          height="850"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          載入中…
        </iframe>
      </div>
      <FooterComponent color="white" />
    </div>
  );
};

export default ReservePageComponent;
