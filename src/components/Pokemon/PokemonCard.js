import React from "react";

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
          onClick={() => props.addFavourite({ id, name, sprites })}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
