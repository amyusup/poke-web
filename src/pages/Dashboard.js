import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../redux/actions/pokemon";
import { useHistory } from "react-router-dom";
export default function Dashboard() {
    const dispatch = useDispatch();
    const { pokemon } = useSelector((state) => state.pokemon);
    const [offset, setOffset] = React.useState(0)
    const history = useHistory();
    React.useEffect(() => {
      dispatch(getPokemon(offset));
    }, [offset]);

    const _onNext = () =>{
      setOffset(offset+25)
    }
    const _onPrev = () =>{
      setOffset(offset-25)
    }
  return (
    <div className="vw-100 ">
      <Navbar />
      <h3 className="text-center my-10">List of pokemon</h3>

      <div className="row mx-10">
          {pokemon.map((item, index)=>{
              return(
                <div className="column" key={index}>
                <Card name={item.name} pokeID={item.url.substring(33).replace(/\//g,'')} />
              </div>
              )
          })}
      </div>
        <div className="text-center ">
        <button className="button button-secondary mx-10" onClick={_onPrev} style={{visibility:offset == 0?"hidden":"visible"}}>Prev</button>
        <button className="button button-secondary mx-10" onClick={_onNext}>Next</button>
        </div>
    </div>
  );
}
