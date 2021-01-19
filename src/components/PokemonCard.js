import React from "react";

const PokemonCard = (props) => {
  return (
    <div className="pokemon-item">
      <img src={props.sprites} alt={props.name} />
      <h2>{props.name}</h2>
      <button onClick={() => props.getDetails(props.id)}>Details</button>
    </div>
  );
};

export default PokemonCard;
