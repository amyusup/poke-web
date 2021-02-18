import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getPokemonById } from "../redux/actions/pokemon";
import { useHistory } from "react-router-dom";
export default function Dashboard() {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state.pokemon);
  const [limit, setLimit] = React.useState(25);
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(async() => {
      await dispatch(getPokemon(limit));
      setLoading(false);
    }, 2000);
    return ()=>clearTimeout(timer)
  }, [limit]);

  const _onNext = () => {
    setLimit(limit + 25);
  };

  return (
    <div className="vw-100 ">
      <Navbar />
      <h3 className="text-center my-10">List of pokemon</h3>
      <div className="row mx-10">
        {pokemon.map((item, index) => {
          // dispatch(getPokemonById(item.url.substring(33).replace(/\//g,'')))
          return (
            <div className="column" key={index}>
              <Card
                name={item.name}
                pokeID={item.url.substring(33).replace(/\//g, "")}
              />
            </div>
          );
        })}
      </div>
      <div
        className="text-center"
        style={{ visibility: loading ? "visible" : "hidden" }}
      >
        <img
          src={window.location.origin + "/images/pokeball.gif"}
          alt="Pokemon"
          style={{ width: "25%" }}
        />
      </div>
      <div className="text-center ">
        {/* <button className="button button-secondary mx-10" onClick={_onPrev} style={{visibility:offset == 0?"hidden":"visible"}}>Prev</button> */}
        <button className="button button-secondary mx-10" onClick={_onNext}>
          Load More ...
        </button>
      </div>
  
    </div>
  );
}
