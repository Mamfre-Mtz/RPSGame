import React, { Component } from "react";

function Score(props) {
  const tokens = ["ROCK", "PAPER", "SCISSORS"];

  return (
    <div className="score__container">
      <ul>
        {tokens.map((token) => (
          <h4 className="primary--text">{token}</h4>
        ))}
      </ul>
      <div className="score--board">
        <h3>{props.marcador}</h3>
      </div>
    </div>
  );
}

export default Score;
