import React from "react";
import "./style.scss";
export default function Skillbar(props) {
    const { name, base_stat } = props
  return (
    <div>
      <p className="text-capitalize my-10">{name}</p>
      <div className="container-skillbar">
        <div className="skills" style={{width:`${base_stat}%`}} >.</div>
      </div>
    </div>
  );
}
