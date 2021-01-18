import React, { useState, useEffect } from "react";

import axios from "axios";

function PokemonHooks(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((response) => {
        setData(response.data.results);
        setLoading(false)
      });

    console.log("Mounted!");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  // componentDidUpdate
  // useEffect(() => {
  //   console.log(data);
  // });

  // useEffect(() => {
  //   console.log("Name Changed!");
  // }, [pokemonName]);

  // componentWillUnmount


  const getDetails = (id) => {
    console.log(id)
    props.history.push(`/pokemon-hooks/${id}`)
  }

  return (
    <div id="pokemon">
      <div className="pokemon-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          data.map((item, index) => (
            <div key={index} className="pokemon-item">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={item.name}
              />
              <h2>{item.name}</h2>
              <button onClick={() => getDetails(index+1)}>Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PokemonHooks;
