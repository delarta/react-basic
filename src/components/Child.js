import React from "react";

const Child = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#e8e9a1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Child</h1>
        <button
          style={{
            backgroundColor: "#e5707e",
            color: "white",
            padding: "0.5rem 3rem",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={() => props.history.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Child;
