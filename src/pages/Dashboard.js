import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
export default function Dashboard() {
  return (
    <div className="vw-100">
      <Navbar />
      <h3 className="text-center mx-10">List of pokemon</h3>

      <div class="row">
        <div class="column">
          <Card />
        </div>
        <div class="column">
          <Card />
        </div>
        <div class="column">
          <Card />
        </div>
        <div class="column">
          <Card />
        </div>
        <div class="column">
          <Card />
        </div>
      </div>
    </div>
  );
}
