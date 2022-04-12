import axios from "axios";
let API_URL = "http://localhost:8080/api/utilitybill";
if (process.env.NODE_ENV === "production") {
  API_URL = `${process.env.REACT_APP_API}/api/utilitybill`;
}

class UtilityBillService {
  post(
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
  ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL,
      {
        title,
        recordDate,
        previousTotalDegree,
        currentTotalDegree,
        gas,
        people,
        roomA: {
          previousDegree: roomAPreviousDegree,
          currentDegree: roomACurrentDegree,
          desc: roomADescription,
        },
        roomB: {
          previousDegree: roomBPreviousDegree,
          currentDegree: roomBCurrentDegree,
          desc: roomBDescription,
        },
        roomC: {
          previousDegree: roomCPreviousDegree,
          currentDegree: roomCCurrentDegree,
          desc: roomCDescription,
        },
        roomD: {
          previousDegree: roomDPreviousDegree,
          currentDegree: roomDCurrentDegree,
          desc: roomDDescription,
        },
      },
      { headers: { Authorization: token } }
    );
  }

  get() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL, { headers: { Authorization: token } });
  }

  patch(
    _id,
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
  ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL + "/" + _id,
      {
        title,
        recordDate,
        previousTotalDegree,
        currentTotalDegree,
        gas,
        people,
        roomA: {
          previousDegree: roomAPreviousDegree,
          currentDegree: roomACurrentDegree,
          desc: roomADescription,
        },
        roomB: {
          previousDegree: roomBPreviousDegree,
          currentDegree: roomBCurrentDegree,
          desc: roomBDescription,
        },
        roomC: {
          previousDegree: roomCPreviousDegree,
          currentDegree: roomCCurrentDegree,
          desc: roomCDescription,
        },
        roomD: {
          previousDegree: roomDPreviousDegree,
          currentDegree: roomDCurrentDegree,
          desc: roomDDescription,
        },
      },
      { headers: { Authorization: token } }
    );
  }

  delete(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.delete(API_URL + "/" + _id, {
      headers: { Authorization: token },
    });
  }
}
export default new UtilityBillService();
