import React, { Component } from "react";

import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Tmdb from "./components/Tmdb";
import TmdbHooks from "./components/TmdbHooks";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/tmdb-hooks">
              <TmdbHooks />
            </Route>
            <Route exact path="/">
              <Tmdb />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
