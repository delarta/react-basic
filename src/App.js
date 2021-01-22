import React from "react";
import PokemonHooks from "./components/PokemonHooks";
import PokemonDetails from "./components/PokemonDetails";
import PokemonFav from "./components/PokemonFav";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="navigation">
        <Link to="/">
          <button>All Pokemon</button>
        </Link>
        <Link to="/pokemon-fav">
          <button>Fav Pokemon</button>
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={PokemonHooks} />
        <Route path="/pokemon-hooks/:id" component={PokemonDetails} />
        <Route path="/pokemon-fav" component={PokemonFav} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
