import axios from "axios";
import jwt_decode from "jwt-decode";

let BASE_URL = "https://sportsmanapp.herokuapp.com/";

export const loginUser = (email, password) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access_token", response.data.data.token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      });
  };
};

export const onboardingData = (gender, intensity) => {
  return (dispatch) => {
    return axios({
      method: "PUT",
      url: `${BASE_URL}login/update`,
      data: {
        gender,
        intensity,
      },
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    }).then((response) => {
      console.log(response);
      dispatch({
        type: "LOGIN_UPDATE_SUCCESS",
        payload: response.data.data,
      });
    });
  };
};

export const registerUser = (username, password, email) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}register`, {
        username,
        password,
        email,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: response.data.data.token,
        });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("access_token");
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
};
