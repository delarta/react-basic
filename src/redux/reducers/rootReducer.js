const initialState = {
  movies: [],
  genres: [],
  movieDetail: null,
  reviews: null,
  token: localStorage.getItem("access_token") || "",
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: payload,
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
