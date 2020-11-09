import React, { Component } from "react";

import MovieSearch from "./components/MovieSearch";
import MovieSearchAxios from "./components/MovieSearchAxios";
import ChonkyCat from "./components/ChonkyCat";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import Tmdb from "./components/Tmdb";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/cats">
              <ChonkyCat />
            </Route>

            <Route exact path="/counter">
              <Counter />
            </Route>

            <Route exact path="/posts">
              <Posts />
            </Route>

            <Route exact path="/tmdb">
              <Tmdb />
            </Route>

            <Route exact path="/posts/:id" component={PostDetails}/>

            <Route exact path="/">
              <MovieSearch />
              <MovieSearchAxios />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
