import React from "react";
import './style.scss';
export default function index() {
  return (
    <ul className="topnav">
      <li>
      <a className="active" href="/">
          POKE - WEB
        </a>
      </li>
      <li>
        <a href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#news">My Pokemon</a>
      </li>
    </ul>
  );
}
