import axios from "axios"

let BASE_URL = "https://team-c.herokuapp.com/"

export const loginUser = (username, password) => {
  return dispatch => {
    return axios.post(`${BASE_URL}login`, {
      username,
      password
    }).then(response => {
      localStorage.setItem('access_token', response.data.data)
      dispatch({type: "LOGIN_SUCCESS", payload: response.data.data})
    })
  }
}