import axios from "axios";

import { BASE_URL, API_KEY } from "../../constants/constants";

export const getMovies = (page = 1) => {
  return (dispatch) => {
    return axios
      .get(
        `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        dispatch({ type: "GET_MOVIES", payload: response.data.results });
      })
      .catch((err) => console.log(err));
  };
};

export const getMovieDetails = (id) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: response.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getGenres = () => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
      .then((response) => {
        dispatch({ type: "GET_GENRES", payload: response.data.genres });
      })
      .catch((err) => console.log(err));
  };
};

export const getMoviesByGenreId = (id) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${id}`)
      .then((response) => {
        dispatch({
          type: "GET_MOVIES_BY_GENRE_ID",
          payload: response.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};
