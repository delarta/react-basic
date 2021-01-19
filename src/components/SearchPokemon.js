import React, { useState } from "react";

import PokemonCard from "./PokemonCard"

const SearchPokemon = (props) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    let searchResult = props.data.find((item) => item.name === search);

    if (searchResult) {
      setSearchResult(searchResult);
    } else {
      setSearchResult("");
    }
    setSearch("");
  };

  return (
    <div>
      <div className="search-form">
        <input
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
        />
        <button onClick={handleSearch}>Search Pokemon</button>
      </div>

      <div className="search-result">
        {searchResult !== "" ? (
          <PokemonCard 
            name={searchResult.name}
            sprites={searchResult.sprites}
            id={searchResult.id}
            getDetails={props.getDetails}
          />
        ) : (
          <div>Pokemon Not Found</div>
        )}
      </div>
    </div>
  );
};

export default SearchPokemon;
