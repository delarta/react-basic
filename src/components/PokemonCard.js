import React from "react";
import { connect } from "react-redux";

const PokemonCard = (props) => {
  const { name, sprites, id, favourite } = props.data;
  return (
    <div className="pokemon-item">
      <img src={sprites} alt={name} />
      <h2>{name}</h2>
      <div className="card-button">
        <button onClick={() => props.getDetails(id)}>Details</button>
        <button
          disabled={favourite}
          onClick={() => props.setFavPokemon({ id, name, sprites })}
        >
          Like
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavPokemon: (newData) =>
      dispatch({ type: "SET_FAV_POKEMON", payload: newData }),
  };
};

export default connect(null, mapDispatchToProps)(PokemonCard);
