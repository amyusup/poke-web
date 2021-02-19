import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../redux/actions/pokemon";
export default function Dashboard() {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state.pokemon);
  const [limit, setLimit] = React.useState(25);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(async () => {
      await dispatch(getPokemon(limit));
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [limit]);

  const _onNext = () => {
    setLimit(limit + 25);
  };

  return (
    <div className="vw-100 ">
      <Navbar />
      <h3 className="text-center my-10">List of pokemon</h3>
      <div className="my-10"></div>

      <div className="row mx-20">
        {pokemon.map((item, index) => {
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
        <button
          className="button button-secondary mx-10"
          onClick={_onNext}
          style={{ visibility: pokemon.length < 25 ? "hidden" : "visible" }}
        >
          Load More ...
        </button>
      </div>
    </div>
  );
}
