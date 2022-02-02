import React from "react";

function token(props) {
  return (
    <div
      className={`token__circle ${props.item.color}`}
      onClick={props.onChildClick}
    >
      <div className="token__bg">
        <img src={`http://localhost:3000/${props.item.img}`} alt=""></img>
      </div>
    </div>
  );
}

export default token;
