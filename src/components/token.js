import React from "react";

function token(props) {
  return (
    <div
      className={`token__circle ${props.item.color} ${props.picked}`}
      onClick={props.onChildClick}
    >
      <div className="token__bg">
        <img src={`./${props.item.img}`} alt=""></img>
      </div>
    </div>
  );
}

export default token;
