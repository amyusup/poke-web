import React from "react";
import "./style.scss";
export default function index(props) {
    const {pokeID, name} = props
  return (
    <div className="card text-center">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`}
        alt="Pokemon"
        style={{ width: "50%" }}
      />
      <div className="container text-center">
        <h4>
          <b>{name}</b>
        </h4>
      </div>
    </div>
  );
}
