import React, { Component } from "react";

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
  }

  render() {
    return (
      <header className="App-header">
        <img src={this.state.imageSrc} className="App-logo" alt="logo" />
        <p>{this.state.message}</p>

        <button
          onClick={this.changeImage}
        >
          Change Image
        </button>
      </header>
    );
  }
}

export default ChonkyCat;
