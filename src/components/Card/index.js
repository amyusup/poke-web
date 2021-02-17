import React from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getPokemonById } from "../../redux/actions/pokemon";
export default function Card(props) {
  const { pokeID, name } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const _onDetail = async() => {
    await dispatch(getPokemonById(pokeID))
    history.push(`pokemon-detail/${pokeID}`)
  };
  return (
    <div
      className="card text-center bg-gray"
      onClick={() => _onDetail() }
    >
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
