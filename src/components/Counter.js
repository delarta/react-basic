import React, { Component } from "react";

import "../assets/css/counterStyle.css";

class Counter extends Component {
  constructor(){
    super();

    this.state = {
      counter: 0
    }
  }

  // state = {
  //   counter: 0,
  // };

  render() {
    const { counter } = this.state;

    return (
      <div id="counter">
        <div>
          <h1>{counter}</h1>
          <button
            onClick={() => {
              this.setState({ counter: counter - 1 });
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              this.setState({ counter: counter + 1 });
            }}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
