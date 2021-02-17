import React from "react";
import "./style.scss";
export default function index() {
  return (
    <div class="card">
      <img
        src="https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png"
        alt="Avatar"
        style={{ width: "100%" }}
      />
      <div class="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}
