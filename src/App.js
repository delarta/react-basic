import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/detail/:id" component={DetailPage} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
