import axios from "axios";

export const getPokemonData = () => {
  return (dispatch) => {
    // dispatch({ type: "REQUEST", payload: { loading: true } });

    return axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=12")
      .then((response) => {
        let newResponse = response.data.results.map((item, index) => {
          return {
            name: item.name,
            url: item.url,
            id: index + 1,
            sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
            favourite: false,
          };
        });

        dispatch({ type: "GET_DATA", payload: newResponse });
        // dispatch({ type: "REQUEST_SUCCESS", payload: { loading: false } });
      })
      .catch((err) => {
        dispatch({ type: "GET_DATA_ERROR", payload: "Cannot get pokemon data" });
      });
  };
};
