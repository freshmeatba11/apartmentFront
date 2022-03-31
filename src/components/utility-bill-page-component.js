import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import TitleComponent from "./title-component";
import MustLoginComponent from "./must-login-component";
import CreateButtonComponent from "./create-button-component";
import UtilityBillService from "../services/utility-bill.service";
import FooterComponent from "./footer-component";

export const UtilityBillPageComponent = ({ currentUser }) => {
  const navigate = useNavigate();
  const [utilityDataArray, setUtilityDataArray] = useState();

  const handleRedirectToUtilityBillPostPage = () => {
    navigate("/info/utility/post");
  };
  const handleDelete = (e) => {
    let result = window.confirm("Are you sure you want to delete it?");
    if (result) {
      UtilityBillService.delete(e.target.id)
        .then(() => {
          alert("Delete success.");
          UtilityBillService.get()
            .then((data) => {
              console.log("Get utility bill data.");
              let dataArray = data.data.slice(-18);
              setUtilityDataArray(dataArray);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Nothing happend.");
    }
  };

  const FormatNumber = (n) => {
    n += "";
    let arr = n.split(".");
    let re = /(\d{1,3})(?=(\d{3})+$)/g;
    return arr[0].replace(re, "$1,") + (arr.length === 2 ? "." + arr[1] : "");
  };

  useEffect(() => {
    console.log("Into useEffect...");
    UtilityBillService.get()
      .then((data) => {
        console.log("Get utility bill data.");
        let dataArray = data.data.slice(-18);
        setUtilityDataArray(dataArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataForm = ({ data, id }) => {
    const roomAUsage = data.roomA.currentDegree - data.roomA.previousDegree;
    const roomBUsage = data.roomB.currentDegree - data.roomB.previousDegree;
    const roomCUsage = data.roomC.currentDegree - data.roomC.previousDegree;
    const roomDUsage = data.roomD.currentDegree - data.roomD.previousDegree;
    const publicUsage =
      data.currentTotalDegree -
      data.previousTotalDegree -
      roomAUsage -
      roomBUsage -
      roomCUsage -
      roomDUsage;
    return (
      <>
        <div className="relative mx-auto w-[90%]">
          <div
            className={clsx(
              "h-[52px] pt-3 px-9  pb-7 rounded-[1.6rem] bg-black/40",
              "grid gap-4 overflow-hidden",
              "hover:h-[797px] hover:overflow-scroll transition-all duration-500",
              "peer",
              "md:hover:h-[525px]"
            )}
          >
            <div>
              <p className="mb-3 font-black text-lg">{data.title}</p>
              <p className="text-white/80 text-sm">
                <span>抄表日期 : </span>
                <span>{data.recordDate.slice(0, 10)}</span>
              </p>
            </div>
            <hr />
            <div className={clsx("grid gap-4", "md:grid-cols-2")}>
              <div>
                <p className="font-black text-lg">公共電費</p>
                <p className="text-white/80 text-sm">
                  <span>度數 : </span>
                  <span>{`${FormatNumber(publicUsage)} 度`}</span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>費用 : </span>
                  <span>
                    {`${FormatNumber(publicUsage * 5)} 元 ( ${FormatNumber(
                      Math.round((publicUsage * 5) / data.people)
                    )} 元/人 )`}
                  </span>
                </p>
              </div>
              <div>
                <p className="font-black text-lg">瓦斯費</p>
                <p className="text-white/80 text-sm">
                  <span>費用 : </span>
                  <span>
                    {`${data.gas} 元 ( ${FormatNumber(
                      Math.round(data.gas / data.people)
                    )} 元/人 )`}
                  </span>
                </p>
              </div>
            </div>
            <hr />
            <div className={clsx("grid gap-4", "md:grid-cols-2")}>
              <div>
                <p className="font-black text-lg">5A</p>
                <p className="text-white/80 text-sm">
                  <span>度數 : </span>
                  <span>
                    {FormatNumber(data.roomA.previousDegree)}
                    <span> &#8594; </span>
                    {FormatNumber(data.roomA.currentDegree)}
                  </span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>費用 : </span>
                  <span>{`${FormatNumber(roomAUsage * 5)} 元`}</span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>備註 : </span>
                  <span>{data.roomA.desc ? data.roomA.desc : "--"}</span>
                </p>
              </div>
              <div>
                <p className="font-black text-lg">5B</p>
                <p className="text-white/80 text-sm">
                  <span>度數 : </span>
                  <span>
                    {FormatNumber(data.roomB.previousDegree)}
                    <span> &#8594; </span>
                    {FormatNumber(data.roomB.currentDegree)}
                  </span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>費用 : </span>
                  <span>{`${FormatNumber(roomBUsage * 5)} 元`}</span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>備註 : </span>
                  <span>{data.roomB.desc ? data.roomB.desc : "--"}</span>
                </p>
              </div>
              <div>
                <p className="font-black text-lg">5C</p>
                <p className="text-white/80 text-sm">
                  <span>度數 : </span>
                  <span>
                    {FormatNumber(data.roomC.previousDegree)}
                    <span> &#8594; </span>
                    {FormatNumber(data.roomC.currentDegree)}
                  </span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>費用 : </span>
                  <span>{`${FormatNumber(roomCUsage * 5)} 元`}</span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>備註 : </span>
                  <span>{data.roomC.desc ? data.roomC.desc : "--"}</span>
                </p>
              </div>
              <div>
                <p className="font-black text-lg">5D</p>
                <p className="text-white/80 text-sm">
                  <span>度數 : </span>
                  <span>
                    {FormatNumber(data.roomD.previousDegree)}
                    <span> &#8594; </span>
                    {FormatNumber(data.roomD.currentDegree)}
                  </span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>費用 : </span>
                  <span>{`${FormatNumber(roomDUsage * 5)} 元`}</span>
                </p>
                <p className="text-white/80 text-sm">
                  <span>備註 : </span>
                  <span>{data.roomD.desc ? data.roomD.desc : "--"}</span>
                </p>
              </div>
            </div>
            <button
              className={clsx(
                "block mx-auto py-2 px-[1.6rem] rounded-3xl",
                "bg-red-500 text-[1.125rem]"
              )}
              id={id}
              onClick={handleDelete}
            >
              刪除
            </button>
          </div>
          <div
            className={clsx(
              "absolute top-4 right-7 rotate-0 pointer-events-none",
              "peer-hover:-rotate-[30deg] transition-all duration-500"
            )}
          >
            &#9654;
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="infoPage">
      <TitleComponent
        text="能源費"
        text02=" Utility Bill /"
        textColor="text-white"
      />
      {!currentUser && <MustLoginComponent />}
      {currentUser && currentUser.user.role !== "roommate" && (
        <CreateButtonComponent
          redirectTo={handleRedirectToUtilityBillPostPage}
        />
      )}
      {currentUser && utilityDataArray && utilityDataArray.length !== 0 && (
        <div
          className={clsx(
            "mx-auto text-white",
            "flex flex-col-reverse gap-4",
            "md:w-[90%] lg:w-4/5 xl:w-[70%] 2xl:w-3/5"
          )}
        >
          {utilityDataArray.map((data) => {
            return <DataForm data={data} key={data._id} id={data._id} />;
          })}
        </div>
      )}

      <FooterComponent color="white" />
    </div>
  );
};

export default UtilityBillPageComponent;
