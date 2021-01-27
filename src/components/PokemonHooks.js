import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchPokemon from "./SearchPokemon";
import PokemonCard from "./PokemonCard";

import { connect } from "react-redux";

import { getPokemonData } from "../redux/actions/pokemon";

import "../assets/css/Pokemon.css";

function PokemonHooks(props) {
  // componentDidMount
  // useEffect(() => {
  //   props.getPokemonData();
  // }, []);

  const getDetails = (id) => {
    console.log(id);
    props.history.push(`/pokemon-hooks/${id}`);
  };

  const getData = () => {
    props.getPokemon();
  };

  return (
    <div id="pokemon">
      <button onClick={getData}>Get Data</button>
      <div className="pokemon-container">
        {props.errorMessage && <div> {props.errorMessage} </div>}
        {props.pokemonData.length !== 0 &&
          props.pokemonData.map((item) => (
            <PokemonCard key={item.id} data={item} getDetails={getDetails} />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemonData: state.pokemonData,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemon: () => dispatch(getPokemonData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHooks);
