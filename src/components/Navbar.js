import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  Container
} from "reactstrap"

import {Link} from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <Container>

        <Nav>
          <NavItem>
            <Link className="nav-link" to="/">Movie</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/chonky">Chonky</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/posts">Posts</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/counter">Counter</Link>
          </NavItem>
         
        </Nav>
      
      </Container>
    )
  }
}

export default Navbar
