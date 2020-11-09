import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Container, Nav, NavItem } from "reactstrap";
import ChonkyImg from "./ChonkyImg";
import LaughingCat from "./LaughingCat";
import SadCat from "./SadCat";

class ChonkyCat extends Component {
  constructor() {
    super();

    this.state = {
      imageSrc:
        "https://i.pinimg.com/originals/92/ef/5a/92ef5ab191f3dedd1685325189126c08.jpg",
      message: "Chonky Cat 1",
    };
  }

  changeImage = () => {
    this.setState({
      imageSrc:
        "https://i.pinimg.com/originals/80/14/6a/80146a9bf7dcf6da2010371c679872bb.jpg",
      message: "Chonky Cat 2",
    });
  };

  render() {
    return (
      <Container className="d-flex vh-100 align-items-center justify-content-center">
        <Nav vertical>
          <NavItem>
            <Link className="nav-link" to="/cats">
              Chonky
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/cats/sadcat">
              Sad Cat
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/cats/laughingcat">
              Smiling Cat
            </Link>
          </NavItem>
        </Nav>
        <div className="chonky-container">
          <Switch>
            <Route exact path="/cats">
              <ChonkyImg />
            </Route>
            <Route path="/cats/sadcat">
              <SadCat />
            </Route>
            <Route path="/cats/laughingcat">
              <LaughingCat />
            </Route>
          </Switch>
        </div>
      </Container>
    );
  }
}

export default ChonkyCat;
