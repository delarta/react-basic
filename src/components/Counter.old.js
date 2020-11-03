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
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div>
          <h1 className="text-center">{this.state.counter}</h1>
          <div>
            <div>
              <div className="form-group">
                <input
                  onChange={this.handleInput}
                  type="number"
                  name="addInput"
                  value={this.state.input}
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-primary mr-2" onClick={this.add}>
              Add
            </button>
            <button className="btn btn-info mr-2" onClick={this.substract}>
              Substract
            </button>
            <button className="btn btn-warning" onClick={this.multiply}>
              Multiply
            </button>
            <div className="my-2">
            <button onClick={this.resetCounter} className="btn btn-secondary btn-block">
              Reset
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
