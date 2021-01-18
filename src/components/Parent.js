import React from "react";
import { Route, Switch } from "react-router-dom";

import Child from "./Child";

class Parent extends React.Component {

  state = {
    color: "#a3ddcb"
  }

  redirectToLogin = () => {
    alert("Move to Login")

    this.props.history.push("/login")
  }

  changeColor = () => {
    if(this.state.color === "#a3ddcb"){
      this.setState({color: "#e6b566"})
    }else{
      this.setState({color: "#a3ddcb"})
    }
  }

  render(){

    return (
      <Switch>
        <Route exact path="/parent">
          <div
            style={{
              height: "100vh",
              backgroundColor: this.state.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h1>Parent</h1>
              {/* <button
                style={{
                  backgroundColor: "#e5707e",
                  color: "white",
                  padding: "0.5rem 3rem",
                  border: "none",
                  borderRadius: "5px",
                }}
  
                onClick={this.redirectToLogin}
              >
                Login
              </button> */}
              <button
                style={{
                  backgroundColor: "#e5707e",
                  color: "white",
                  padding: "0.5rem 3rem",
                  border: "none",
                  borderRadius: "5px",
                }}
  
                onClick={this.changeColor}
              >
                Change Color
              </button>
            </div>
          </div>
        </Route>
  
        <Route exact path="/parent/child" component={Child} />
      </Switch>
    );
  }
};

export default Parent;
