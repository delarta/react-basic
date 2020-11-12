import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import TmdbHooks from "./components/TmdbHooks";
import Register from "./components/Register";
import RegisteredUser from "./components/RegisteredUser";
import Login from "./components/Login";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/user">
              <RegisteredUser />
            </Route>

            <Route exact path="/movie-detail/:movieId">
              <MovieDetail />
            </Route>

            <Route exact path="/">
              <TmdbHooks />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
