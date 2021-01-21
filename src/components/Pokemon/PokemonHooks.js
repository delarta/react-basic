import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchPokemon from "./SearchPokemon";
import PokemonCard from "./PokemonCard";

import { connect } from "react-redux";

function PokemonHooks(props) {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const [favPokemon, setFavPokemon] = useState([]);

  const [loading, setLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((response) => {
        // console.log("ORI", response.data.results);
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
        // console.log("NEW", newResponse);

        props.getPokemonData(newResponse);

        // setData(newResponse);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("FROM REDUX", props.pokemonData);
  });

  const getDetails = (id) => {
    console.log(id);
    props.history.push(`/pokemon-hooks/${id}`);
  };

  const addFavourite = (pokemon) => {
    setData([
      ...data.map((item) => {
        if (item.id === pokemon.id) {
          item.favourite = true;
        }
        return item;
      }),
    ]);

    setFavPokemon([pokemon, ...favPokemon]);
  };

  return (
    <div id="pokemon">
      <div className="navigation">
        <button onClick={() => setPage(1)}>All Pokemon</button>
        <button onClick={() => setPage(2)}>Fav Pokemon</button>
      </div>

      {page === 1 ? (
        <div>
          <SearchPokemon getDetails={getDetails} data={data} />

          <div className="pokemon-container">
            {props.pokemonData.map((item) => (
              <PokemonCard
                key={item.id}
                data={item}
                getDetails={getDetails}
                addFavourite={addFavourite}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="pokemon-container">
          {favPokemon.map((item) => (
            <PokemonCard
              key={item.id}
              data={item}
              getDetails={getDetails}
              addFavourite={addFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemonData: state.pokemonData,
    favPokemon: state.favPokemon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonData: (data) => dispatch({ type: "GET_DATA", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHooks);
