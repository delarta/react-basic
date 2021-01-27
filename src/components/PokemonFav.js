import React from "react";
import PokemonCard from "./PokemonCard";

import { connect } from "react-redux";

const PokemonFav = (props) => {
  return (
    <div className="pokemon-container">
      {props.pokemon.map((item) => (
        <PokemonCard
          key={item.id}
          data={item}
          getDetails={() => {
            props.history.push(`/pokemon-hooks/${item.id}`);
          }}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.favPokemon,
  };
};

export default connect(mapStateToProps)(PokemonFav);
