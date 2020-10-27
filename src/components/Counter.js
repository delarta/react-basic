import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      input: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };

  handleInput = (e) => {
    this.setState({
      input: Number(e.target.value),
    });
  };

  add = () => {
    this.setState({
      counter: this.state.counter + this.state.input,
    });
  };

  substract = () => {
    this.setState({
      counter: this.state.counter - this.state.input,
    });
  };

  multiply = () => {
    this.setState({
      counter: this.state.counter * this.state.input,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#d2d3c9",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "64px",
              color: "#0e918c",
            }}
          >
            {this.state.counter}
          </h1>
          <button onClick={this.decrementCounter}>-</button>
          <button onClick={this.incrementCounter}>+</button>
          <div>
            <button
              style={{
                padding: "8px 16px",
              }}
              onClick={this.resetCounter}
            >
              Reset
            </button>
          </div>
          <div>
            <div>
              <input
                onChange={this.handleInput}
                type="number"
                name="addInput"
                value={this.state.input}
              />
            </div>
            <button className="btn" onClick={this.add}>Add</button>
            <button className="btn" onClick={this.substract}>Substract</button>
            <button className="btn" onClick={this.multiply}>Multiply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
