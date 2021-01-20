import React, { Component } from "react";

import axios from "axios";

import "../../assets/css/Pokemon.css";

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((response) => {
        this.setState({
          data: response.data.results,
          loading: false,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div id="pokemon">
        <div className="pokemon-container">
          {this.state.loading ? (
            <div> Loading... </div>
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
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Pokemon;
