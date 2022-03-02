import React from "react";
import clsx from "clsx";
import TitleComponent from "./title-component";
import BinIcon from "../assets/images/bin.png";

export const RecyclePageComponent = () => {
  const Schedule = [
    {
      name: "永平路26巷口",
      time: "13:02",
      trash: ["O", "O", "X", "O", "O", "O", "X"],
      recycle: ["13:02", "X", "X", "X", "13:02", "X", "X"],
    },
    {
      name: "保福路一段47巷口",
      time: "13:19 / 19:07",
      trash: ["O", "O", "X", "O", "O", "O", "X"],
      recycle: ["13:19", "19:07", "X", "19:07", "13:19", "19:07", "X"],
    },
    {
      name: "保平路2號",
      time: "13:10 / 19:10",
      trash: ["O", "O", "X", "O", "O", "O", "X"],
      recycle: ["13:10", "19:10", "X", "19:10", "13:10", "19:10", "X"],
    },
    {
      name: "永和路一段141號",
      time: "19:26",
      trash: ["O", "O", "X", "O", "O", "O", "X"],
      recycle: ["X", "19:26", "X", "19:26", "X", "19:26", "X"],
    },
    {
      name: "永和路一段166號",
      time: "14:02 / 19:53",
      trash: ["O", "O", "X", "O", "O", "O", "X"],
      recycle: ["14:02", "19:53", "X", "19:53", "14:02", "19:53", "X"],
    },
  ];

  return (
    <div className="infoPage">
      <TitleComponent
        text="垃圾車時刻表"
        text02=" Trash Time & Location /"
        textColor="text-white"
      />

      <div
        className={clsx(
          "w-screen",
          "grid gap-4 ",
          "lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"
        )}
      >
        {Schedule.map((route) => {
          return (
            <div className={clsx("w-[393px] mx-auto")}>
              <div className={clsx("text-white py-1")}>
                {route.time + " " + route.name}
              </div>
              <table className="text-white border ">
                <tr className="border">
                  <th className="border w-12 "></th>
                  <th className="border w-12 ">Mon.</th>
                  <th className="border w-12 ">Tue.</th>
                  <th className="border w-12 ">Wed.</th>
                  <th className="border w-12 ">Thu.</th>
                  <th className="border w-12 ">Fri.</th>
                  <th className="border w-12 ">Sat.</th>
                  <th className="border w-12 ">Sun.</th>
                </tr>
                <tr className="border">
                  <td className="border px-4">
                    <img src={BinIcon} className="w-4 h-4" alt="" />
                  </td>
                  {route.trash.map((trash) => {
                    if (trash === "O")
                      return <td className="border px-4">&#9711;</td>;
                    if (trash === "X")
                      return <td className="border px-4">&#9587;</td>;
                  })}
                </tr>
                <tr>
                  <td className="border px-4">&#9851;</td>
                  {route.recycle.map((recycle) => {
                    if (recycle === "X")
                      return <td className="border px-4">&#9587;</td>;
                    if (recycle !== "X")
                      return <td className="border px-1">{recycle}</td>;
                  })}
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecyclePageComponent;
