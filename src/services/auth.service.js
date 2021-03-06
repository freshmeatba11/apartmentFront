import axios from "axios";
let API_URL = "http://localhost:8080/api/user";
if (process.env.NODE_ENV === "production") {
  API_URL = `${process.env.REACT_APP_API}/api/user`;
}

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
