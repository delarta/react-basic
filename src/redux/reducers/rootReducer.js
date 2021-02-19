const initialState = {
  movies: [],
  genres: [],
  movieDetail: null,
  reviews: null,
  token: localStorage.getItem("access_token") || "",
  status: null
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        token: "",
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
      };
    case "LOGIN_SUCCESS":
      console.log(payload)
      return {
        ...state,
        token: payload.token,
        status: payload.status
      };
    case "LOGIN_UPDATE_SUCCESS":
      console.log(payload)
      return {
        ...state,
        status: payload.status
      };
    case "GET_MOVIES":
      return {
        ...state,
        movies: payload,
      };
    case "GET_MOVIES_BY_GENRE_ID":
      return {
        ...state,
        movies: payload,
      };
    case "GET_REVIEWS_BY_MOVIE_ID":
      return {
        ...state,
        reviews: payload,
      };
    case "POST_REVIEWS_BY_MOVIE_ID":
      return {
        ...state,
        reviews: [payload, ...state.reviews],
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: payload,
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
