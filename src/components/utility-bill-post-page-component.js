import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import TitleComponent from "./title-component";
import MustLoginComponent from "./must-login-component";
import ErrorMessageComponent from "./error-message-component";
import UtilityBillService from "../services/utility-bill.service";
import FooterComponent from "./footer-component";

export const UtilityBillPostPageComponent = ({ currentUser }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [recordDate, setRecordDate] = useState("");
  const [previousTotalDegree, setPreviousTotalDegree] = useState("");
  const [currentTotalDegree, setCurrentTotalDegree] = useState("");
  const [gas, setGas] = useState("");
  const [people, setPeople] = useState("");
  const [roomAPreviousDegree, setRoomAPreviousDegree] = useState("");
  const [roomACurrentDegree, setRoomACurrentDegree] = useState("");
  const [roomADescription, setRoomADescription] = useState("");
  const [roomBPreviousDegree, setRoomBPreviousDegree] = useState("");
  const [roomBCurrentDegree, setRoomBCurrentDegree] = useState("");
  const [roomBDescription, setRoomBDescription] = useState("");
  const [roomCPreviousDegree, setRoomCPreviousDegree] = useState("");
  const [roomCCurrentDegree, setRoomCCurrentDegree] = useState("");
  const [roomCDescription, setRoomCDescription] = useState("");
  const [roomDPreviousDegree, setRoomDPreviousDegree] = useState("");
  const [roomDCurrentDegree, setRoomDCurrentDegree] = useState("");
  const [roomDDescription, setRoomDDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeRecordDate = (e) => {
    setRecordDate(e.target.value);
  };
  const handleChangePreviousTotalDegree = (e) => {
    setPreviousTotalDegree(e.target.value);
  };
  const handleChangeCurrentTotalDegree = (e) => {
    setCurrentTotalDegree(e.target.value);
  };
  const handleChangeGas = (e) => {
    setGas(e.target.value);
  };
  const handleChangePeople = (e) => {
    setPeople(e.target.value);
  };
  const handleChangeRoomAPreviousDegree = (e) => {
    setRoomAPreviousDegree(e.target.value);
  };
  const handleChangeRoomACurrentDegree = (e) => {
    setRoomACurrentDegree(e.target.value);
  };
  const handleChangeRoomADescription = (e) => {
    setRoomADescription(e.target.value);
  };
  const handleChangeRoomBPreviousDegree = (e) => {
    setRoomBPreviousDegree(e.target.value);
  };
  const handleChangeRoomBCurrentDegree = (e) => {
    setRoomBCurrentDegree(e.target.value);
  };
  const handleChangeRoomBDescription = (e) => {
    setRoomBDescription(e.target.value);
  };
  const handleChangeRoomCPreviousDegree = (e) => {
    setRoomCPreviousDegree(e.target.value);
  };
  const handleChangeRoomCCurrentDegree = (e) => {
    setRoomCCurrentDegree(e.target.value);
  };
  const handleChangeRoomCDescription = (e) => {
    setRoomCDescription(e.target.value);
  };
  const handleChangeRoomDPreviousDegree = (e) => {
    setRoomDPreviousDegree(e.target.value);
  };
  const handleChangeRoomDCurrentDegree = (e) => {
    setRoomDCurrentDegree(e.target.value);
  };
  const handleChangeRoomDDescription = (e) => {
    setRoomDDescription(e.target.value);
  };

  const handleSubmit = () => {
    UtilityBillService.post(
      title,
      recordDate,
      previousTotalDegree,
      currentTotalDegree,
      gas,
      people,
      roomAPreviousDegree,
      roomACurrentDegree,
      roomADescription,
      roomBPreviousDegree,
      roomBCurrentDegree,
      roomBDescription,
      roomCPreviousDegree,
      roomCCurrentDegree,
      roomCDescription,
      roomDPreviousDegree,
      roomDCurrentDegree,
      roomDDescription
    )
      .then(() => {
        console.log(
          "Submit successfully, now you are redirect to utility bill page."
        );
        navigate("/info/utility");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div className="infoPage">
      <TitleComponent
        text="能源費"
        text02=" Utility Bill /"
        textColor="text-white"
      />
      {message && <ErrorMessageComponent message={message} />}
      {!currentUser && <MustLoginComponent />}
      {currentUser && (
        <div
          className={clsx(
            "mx-auto w-[80%] p-6 rounded-lg",
            "bg-black/40 text-white",
            "flex flex-col gap-6",
            "lg:w-1/2 xl:w-2/5 2xl:w-1/3"
          )}
        >
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="title">
              Title:
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="title"
              id="title"
              type="text"
              placeholder="YYYYMM"
              onChange={handleChangeTitle}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="recordDate">
              Record Date 抄錶日期 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="recordDate"
              id="recordDate"
              type="date"
              onChange={handleChangeRecordDate}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="previousTotalDegree">
              Previous Total Degree 上個月總電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="previousTotalDegree"
              id="previousTotalDegree"
              type="number"
              onChange={handleChangePreviousTotalDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="currentTotalDegree">
              Current Total Degree 本月總電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="currentTotalDegree"
              id="currentTotalDegree"
              type="number"
              onChange={handleChangeCurrentTotalDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="gas">
              Gas 瓦斯費 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="gas"
              id="gas"
              type="number"
              onChange={handleChangeGas}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="people">
              People 住民人數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="people"
              id="people"
              type="number"
              onChange={handleChangePeople}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="aPreviousDegree">
              Room A Previous Degree 前一月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="aPreviousDegree"
              id="aPreviousDegree"
              type="number"
              onChange={handleChangeRoomAPreviousDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="aCurrentDegree">
              Room A Current Degree 本月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="aCurrentDegree"
              id="aCurrentDegree"
              type="number"
              onChange={handleChangeRoomACurrentDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="aDesc">
              Room A Description 備註 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="aDesc"
              id="aDesc"
              type="text"
              onChange={handleChangeRoomADescription}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="bPreviousDegree">
              Room B Previous Degree 前一月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="bPreviousDegree"
              id="bPreviousDegree"
              type="number"
              onChange={handleChangeRoomBPreviousDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="bCurrentDegree">
              Room B Current Degree 本月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="bCurrentDegree"
              id="bCurrentDegree"
              type="number"
              onChange={handleChangeRoomBCurrentDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="bDesc">
              Room B Description 備註 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="bDesc"
              id="bDesc"
              type="text"
              onChange={handleChangeRoomBDescription}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="cPreviousDegree">
              Room C Previous Degree 前一月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="cPreviousDegree"
              id="cPreviousDegree"
              type="number"
              onChange={handleChangeRoomCPreviousDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="cCurrentDegree">
              Room C Current Degree 本月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="cCurrentDegree"
              id="cCurrentDegree"
              type="number"
              onChange={handleChangeRoomCCurrentDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="cDesc">
              Room C Description 備註 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="cDesc"
              id="cDesc"
              type="text"
              onChange={handleChangeRoomCDescription}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="dPreviousDegree">
              Room D Previous Degree 前一月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="dPreviousDegree"
              id="dPreviousDegree"
              type="number"
              onChange={handleChangeRoomDPreviousDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="dCurrentDegree">
              Room D Current Degree 本月電表度數 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="dCurrentDegree"
              id="dCurrentDegree"
              type="number"
              onChange={handleChangeRoomDCurrentDegree}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="tracking-widest" htmlFor="dDesc">
              Room D Description 備註 :
            </label>
            <input
              className="py-1 px-3 rounded bg-black/90"
              name="dDesc"
              id="dDesc"
              type="text"
              onChange={handleChangeRoomDDescription}
            />
          </div>
          {message && (
            <div
              className={clsx(
                "mx-auto w-full py-1 px-2 rounded-lg",
                "bg-amber-500/40 text-white"
              )}
            >
              {message}
            </div>
          )}

          <button
            className={clsx(
              "block mx-auto w-1/2 p-2 rounded",
              "bg-white/90 text-black"
            )}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      )}

      <FooterComponent color="white" />
    </div>
  );
};

export default UtilityBillPostPageComponent;
