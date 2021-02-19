import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyPokemon,
  deleteMyPokemon,
  deleteAllMyPokemon,
} from "../redux/actions/pokemon";
import { useHistory } from "react-router-dom";
export default function Dashboard() {
  const dispatch = useDispatch();
  const { myPokemon, message } = useSelector((state) => state.pokemon);
  const [limit, setLimit] = React.useState(25);
  const [loading, setLoading] = React.useState(true);
  const history = useHistory();
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(async () => {
      await dispatch(getMyPokemon(limit));
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [limit, message]);

  const _onDelete = (pokeId) => {
    dispatch(deleteMyPokemon(pokeId));
  };
  const _onDeleteAll = (pokeId) => {
    dispatch(deleteAllMyPokemon());
  };

  const _onNext = () => {
    setLimit(limit + 25);
  };

  return (
    <div className="vw-100 ">
      <Navbar />
      <div className="text-center my-10">
      <h2 >List of My pokemon
        <button
          className="button button-danger radius-20"
          // style={{ width: "10%" }}
          onClick={() => _onDeleteAll()}
        >
          Clear
        </button>
        </h2>
      </div>
      <div className="row mx-10">
        {myPokemon.length < 1 ? (
          <>
            <h3 className="my-30 text-center">
              No pokemon data has been saved yet. Search now?
            </h3>
            <div className="text-center">
              <button
                className="button  radius-20 "
                style={{ width: "30%" }}
                onClick={() => history.push("/")}
              >
                Go!
              </button>
            </div>
          </>
        ) : (
          myPokemon.map((item, index) => {
            return (
              <div className="column" key={index}>
                <Card name={item.name} pokeID={item.pokeId} />
                <button
                  className="button button-danger radius-20"
                  style={{ width: "90%" }}
                  onClick={() => _onDelete(item.pokeId)}
                >
                  Delete
                </button>
              </div>
            );
          })
        )}
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
          onClick={() => _onNext()}
          style={{ visibility: myPokemon.length < 25 ? "hidden" : "visible" }}
        >
          Load More ...
        </button>
      </div>
    </div>
  );
}
