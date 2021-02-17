import React from "react";
import './style.scss';
export default function index() {
  return (
    <ul class="topnav">
      <li>
      <a class="active" href="/">
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
