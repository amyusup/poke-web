import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../redux/actions/pokemon";
import { useHistory, useParams } from "react-router-dom";
export default function Detail() {
  const dispatch = useDispatch();
  const { pokemonById } = useSelector((state) => state.pokemon);
  const history = useHistory();
  let { id } = useParams();
  React.useEffect(() => {
    // dispatch(getPokemonById(id));
  }, [id]);
  console.log(pokemonById.types[0].type.name);
  const _onNext = () => {
    // setLimit(limit + 25);
  };
  return (
    <div className="vw-100 ">
      <Navbar />
      <h3 className="text-center my-30">Detail of pokemon</h3>

      <div className="row mx-10">
        <div className="column column-50 bg-gray text-center radius-20">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt="Pokemon"
            style={{ width: "75%" }}
          />
        </div>
        <div className="column column-50">
          <h3 className="text-uppercase">{pokemonById.name}</h3>
          <div className="bg-dark p-10 radius-20 ROW">
            <div className="column column-50">
              Height : {pokemonById.height}
            </div>
            <div className="column column-50">
              Weight : {pokemonById.weight}
            </div>
            <div className="column column-50">
              Species :
                {pokemonById.abilities[0].ability.name}
            </div>
            <div className="column column-50">
              Type :
              {pokemonById.types.map((item, index) => 
                item.type.name + ", "
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <button className="button button-secondary mx-10" onClick={_onNext}>
          Save
        </button>
      </div>
    </div>
  );
}
