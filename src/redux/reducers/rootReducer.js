
let initialState = {
  pokemonData: [],
  favPokemon: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        pokemonData: action.payload,
      };

    case "SET_FAV_POKEMON":
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