import React, { Component } from "react";

import MovieSearch from "./components/MovieSearch";

import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieSearch />
      </div>
    );
  }
}

export default App;
