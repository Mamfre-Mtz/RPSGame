import React from "react";

function Score(props) {
  const tokens = ["ROCK", "PAPER", "SCISSORS"];

  return (
    <div className="score__border">
      <ul>
        {tokens.map((token) => (
          <h4 className="primary--text score__token" key={token}>
            {token}
          </h4>
        ))}
      </ul>
      <div className="score__board">
        <h4 className="score--text">SCORE</h4>
        <h3>{props.marcador}</h3>
      </div>
    </div>
  );
}

export default Score;
