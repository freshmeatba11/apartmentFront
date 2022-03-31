import React from "react";
import clsx from "clsx";
import TitleComponent from "./title-component";
import FooterComponent from "./footer-component";

export const InstructionsPageComponent = () => {
  const instructionList = [
    {
      device: "電視",
      instruction: [
        {
          title: "BenQ 40吋液晶顯示器 c40-510 Tuner&RC UM",
          link: "https://esupportdownload.benq.com/esupport/LCD%20TV/UserManual/C32-310/TU_ZH-TW_190605095556.pdf",
        },
        {
          title: "BenQ 40吋液晶顯示器 c40-510 使用手冊",
          link: "https://esupportdownload.benq.com/esupport/LCD%20TV/UserManual/C32-310/UM_ZH-TW_190819095020.pdf",
        },
      ],
    },
    {
      device: "冰箱",
      instruction: [
        {
          title: "Sampo 一級能效雙門冰箱 SR-B10G",
          link: "https://www.sampo.com.tw/pdetail.aspx?pd=1094",
        },
      ],
    },
    {
      device: "調光燈",
      instruction: [
        {
          title: "米家吸頂燈450 使用說明",
          link: "https://manuals.plus/zh-TW/_mi/%E6%99%BA%E8%83%BDled%E5%A4%A9%E8%8A%B1%E7%87%88%E8%AA%AA%E6%98%8E%E6%9B%B8#connect_with_mi_homexiaomi_home_app",
        },
      ],
    },
    {
      device: "洗衣機",
      instruction: [
        {
          title: "Panasonic 11kg超變頻直立式洗衣機 NA-V110EBS",
          link: "http://pmst.panasonic.com.tw/PSMIOUT/DL/DLFiles/2575/2575_H_26680.pdf",
        },
      ],
    },
    {
      device: "網路設定參考",
      instruction: [
        {
          title: "判斷上網類型",
          link: "http://www.dlinktw.com.tw/techsupport/FAQView.aspx?f=ufPhbDj3cij7JaedecIPtA%3d%3d",
        },
        {
          title: "PPPoE連線設定說明",
          link: "http://spearmint-drspeed.cdn.hinet.net/%E9%9D%9E%E5%9B%BA%E5%AE%9A%E5%88%B6PPPoE%E9%80%A3%E7%B7%9A%E8%A8%AD%E5%AE%9A%E8%AA%AA%E6%98%8E.pdf",
        },
      ],
    },
  ];
  return (
    <div className="infoPage">
      <TitleComponent
        text="生活家電指南"
        text02=" Device Instruction/"
        textColor="text-white"
      />
      <div className={clsx("w-3/4 mx-auto grid gap-1")}>
        {instructionList.map((data, i) => {
          return (
            <div
              className={clsx(
                "bg-black bg-opacity-40 rounded-2xl ",
                "w-full h-10 px-6 py-2",
                "text-white",
                "hover:h-[200px] ",
                "overflow-hidden transition-all duration-500"
              )}
              key={i}
            >
              <div className="flex justify-between">
                <span className="">{data.device}</span>
                <span className="text-white text-opacity-70">&#9660;</span>
              </div>
              {data.instruction.map((source, i) => {
                return (
                  <button
                    className="block pt-4 cursor-pointer underline underline-offset-4"
                    key={i}
                  >
                    <a href={source.link}>{source.title} &#8629;</a>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
      <FooterComponent color="white" />
    </div>
  );
};

export default InstructionsPageComponent;
