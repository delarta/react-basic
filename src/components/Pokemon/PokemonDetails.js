import React, { useState, useEffect } from "react";

import axios from "axios";

function PokemonDetails(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const pokemonId = props.match.params.id;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));

    return () => {
      setData(null)
    }
  }, []);

  return (
    <div id="pokemon-details">
      <div className="pokemon-container">
        {data !== null && (
          <div className="pokemon-item">
            <img src={data.sprites.front_default} alt={data.name} />
            <h2>{data.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetails;
