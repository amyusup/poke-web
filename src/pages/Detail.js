import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Skillbar from "../components/Skillbar";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, addPokemon } from "../redux/actions/pokemon";
import { useParams } from "react-router-dom";
export default function Detail() {
  const dispatch = useDispatch();
  const { pokemonById } = useSelector((state) => state.pokemon);
  const [visible, setVisible] = React.useState("none");
  let { id } = useParams();

  React.useEffect(async () => {
    await dispatch(getPokemonById(id));
  }, []);
  const _onSave = async () => {
    await dispatch(addPokemon({ pokeId: id, name: pokemonById.name }));
    setVisible("block");
  };
  return (
    <div className="vw-100 ">
      <Navbar />
      <Alert
        visible={visible}
        setVisible={() => setVisible("none")}
        text="Pokemon data has been saved"
      />
      <h3 className="text-center my-30">Detail of pokemon</h3>

      <div className="row mx-10">
        <div className="column column-50  text-center radius-20 p-10">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt="Pokemon"
            style={{ width: "50%" }}
          />
        </div>
        <div className="column column-50">
          <h3 className="text-uppercase text-center bg-dark radius-20 my-10 p-10">
            {pokemonById.name}
          </h3>
          <div className="bg-gray p-10 radius-20 ROW">
            <div className="column column-50">
              Height : {pokemonById.height}
            </div>
            <div className="column column-50">
              Weight : {pokemonById.weight}
            </div>
            <div className="column column-50">
              Abilities :
              {pokemonById.abilities.map((item, index) => {
                return (
                  <div
                    className=" bg-dark p-10 my-10 radius-20 text-center text-capitalize"
                    style={{ width: "50%" }}
                    key={index}
                  >
                    {item.ability.name}
                  </div>
                );
              })}
            </div>
            <div className="column column-50">
              Type :
              {pokemonById.types.map((item, index) => {
                return (
                  <div
                    className=" bg-dark p-10 my-10 radius-20 text-center text-capitalize"
                    style={{ width: "50%" }}
                    key={index}
                  >
                    {item.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row  mx-10">
        <div className="column column-50">
          {pokemonById.stats.map((item, index) => {
            return (
              <Skillbar
                key={index}
                name={item.stat.name}
                base_stat={item.base_stat}
              />
            );
          })}
        </div>

        <div className="text-center my-10 column column-50">
          Are you going to save this Pokemon data?
          <button className="button button-secondary mx-10" onClick={_onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
