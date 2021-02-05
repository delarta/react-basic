import axios from "axios";

let BASE_URL = "https://bbm-warehouse.herokuapp.com/";

export const loginUser = (username, password) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}login`, {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access_token", response.data.data.token);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data.token });
      });
  };
};

export const registerUser = (username, password, email) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}register`, {
        username,
        password,
        email
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: "REGISTER_SUCCESS", payload: response.data.data.token });
      });
  };
};


export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("access_token");
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
};
