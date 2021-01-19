import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchPokemon from "./SearchPokemon";
import PokemonCard from "./PokemonCard";

function PokemonHooks(props) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((response) => {
        let newResponse = response.data.results.map((item, index) => {
          return {
            name: item.name,
            url: item.url,
            id: index + 1,
            sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        console.log(newResponse);
        setData(newResponse);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   let searchResult = data.find((item) => item.name === search);

  //   if (searchResult) {
  //     setSearchResult(searchResult.name);
  //   }else{
  //     setSearchResult("No Pokemon Found...");
  //   }
  // }, [search]);

  const getDetails = (id) => {
    console.log(id);
    props.history.push(`/pokemon-hooks/${id}`);
  };

  return (
    <div id="pokemon">
      <SearchPokemon getDetails={getDetails} data={data} />

      <div className="pokemon-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          data.map((item) => (
            <PokemonCard
              key={item.id}
              name={item.name}
              sprites={item.sprites}
              id={item.id}
              getDetails={getDetails}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PokemonHooks;
