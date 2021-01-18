import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "80px",
        padding: "0 24px",
        backgroundColor: "#f8f1f1"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/comic">Comic</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/parent">Parent</Link>
      <Link to="/parent/child">Child</Link>
    </div>
  );
};

export default NavBar;
