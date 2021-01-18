import React from "react";
import InputExample from "./components/InputExample";
import DeltaComic from "./components/DeltaComic";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Parent from "./components/Parent";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import Pokemon from "./components/Pokemon";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/login" component={InputExample} />
          <Route path="/comic" component={DeltaComic} />
          <Route path="/counter" component={Counter} />
          <Route path="/posts" component={Posts} />
          <Route path="/pokemon" component={Pokemon} />
          

          <Route path="/parent" component={Parent} />

          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
