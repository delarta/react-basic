import React from "react";
import PokemonHooks from "./components/PokemonHooks";
import PokemonDetails from "./components/PokemonDetails";
import PokemonFav from "./components/PokemonFav";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Button } from "reactstrap";

function App(props) {
  return (
    <BrowserRouter>
      <div className="text-center py-5">
        <Link to="/">
          <Button className="mr-3" color="primary">
            All Pokemon
          </Button>
        </Link>
        <Link to="/pokemon-fav">
          <Button color="primary">Fav Pokemon</Button>
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
