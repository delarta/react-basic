import types from "../types/pokemon"

let initialState = {
  pokemonData: [],
  favPokemon: [],
  errorMessage: "",
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        pokemonData: action.payload,
      };
    case types.GET_DATA_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case types.SET_FAV_POKEMON:
      return {
        ...state,
        // favPokemon: state.favPokemon.concat(action.payload),
        favPokemon: [...state.favPokemon, action.payload],
      };

    case "SEARCH_POKEMON":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer