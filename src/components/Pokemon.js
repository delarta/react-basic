import React, { Component } from "react";

import axios from "axios";

import "../assets/css/Pokemon.css";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=13")
      .then((response) => {
        this.setState({ data: response.data.results });
      });
  }

  render() {
    const { data } = this.state;

    console.log(this.state.data);
    return (
      <div id="pokemon">
        <div className="pokemon-container">
          {/* <div className="pokemon-item">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
              alt="charmander"
            />
            <h2>Charmander</h2>
          </div> */}

          {data.map((item, index) => (
            <div key={index} className="pokemon-item">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
                alt={item.name}
              />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokemon;
