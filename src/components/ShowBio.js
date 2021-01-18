import React from "react";

class ShowBio extends React.Component {
  componentDidMount() {
    console.log("rendered");
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    alert("component unmounted");
  }

  render() {
    return (
      <div>
        <nav>Navbar</nav>
        <div>
          <h1>Hi My Name is {this.props.username}</h1>
          <h4>My password is {this.props.password}</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio
            odit expedita in. Dolorem asperiores quis, quaerat excepturi
            aliquid, harum corrupti ab accusamus facere, magni repudiandae
            explicabo impedit voluptatum? Voluptatem.
          </p>
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default ShowBio;
