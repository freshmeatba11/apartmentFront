import axios from "axios";
const API_URL = "http://localhost:8080/api/posts";

class PostService {
  post(title, content, important) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { title, content, important },
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

  getById(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/" + _id, {
      headers: { Authorization: token },
    });
  }

  patch(_id, title, content, important) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL + "/" + _id,
      { title, content, important },
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
export default new PostService();
