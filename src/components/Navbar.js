import React, { Component } from "react";
import { Nav, NavItem, Container } from "reactstrap";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <NavItem>
            <Link className="nav-link" to="/">
              TMDB (CLASS)
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/tmdb-hooks">
              TMDB (HOOKS)
            </Link>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}

export default Navbar;
