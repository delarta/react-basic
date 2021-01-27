import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchPokemon from "./SearchPokemon";
import PokemonCard from "./PokemonCard";

import { connect } from "react-redux";

import "../assets/css/Pokemon.css";

function PokemonHooks(props) {
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

        props.getPokemonData(newResponse);

        setLoading(false);
      });
  }, []);

  const getDetails = (id) => {
    console.log(id);
    props.history.push(`/pokemon-hooks/${id}`);
  };

  return (
    <div id="pokemon">
      <div className="pokemon-container">
        {props.pokemonData.map((item) => (
          <PokemonCard key={item.id} data={item} getDetails={getDetails} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemonData: state.pokemonData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonData: (data) => dispatch({ type: "GET_DATA", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHooks);
