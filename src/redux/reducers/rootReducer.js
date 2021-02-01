const initialState = {
  movies: [],
  movieDetail: null
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: payload,
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
