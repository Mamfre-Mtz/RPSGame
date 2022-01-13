import React from "react";

function token(props) {
  return (
    <div className={`color-${props.color}`}>
      <img src={`http://localhost:3000/Assets/images/${props.name}`}></img>
    </div>
  );
}

export default token;
