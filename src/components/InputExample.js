import React, { Component } from "react";

import ShowBio from "./ShowBio";

import "../assets/css/inputExample.css";

class InputExample extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isAuthorized: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    // this.setState({ isAuthorized: true });

    if (this.state.username === "delarta" && this.state.password === "qweasd") {
      this.setState({ isAuthorized: true });
    } else {
      this.setState({ isAuthorized: false });
    }
  };

  render() {

    console.log(this.props)
    return (
      <div>
        <div id="inputExample">
          <div>
            <div className="input-form">
              <input
                placeholder="Username"
                onChange={this.handleChange}
                type="text"
                name="username"
              />
            </div>
            <div className="input-form">
              <input
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
                name="password"
              />
            </div>
            <button
              style={{
                backgroundColor: "pink",
                border: "none",
                padding: "0.5rem 1rem",
              }}
              onClick={this.handleClick}
            >
              Login
            </button>
            <button
              style={{
                backgroundColor: "steelblue",
                border: "none",
                padding: "0.5rem 1rem",
              }}
              onClick={() => this.props.history.goBack()}
            >
              Back
            </button>
          </div>
        </div>
        {this.state.isAuthorized ? (
          <ShowBio
            username={this.state.username}
            password={this.state.password}
          />
        ) : (
          <div>Unauthorized</div>
        )}
      </div>
    );
  }
}

export default InputExample;
