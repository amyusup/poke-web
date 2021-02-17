import {
  GET_POKEMON,
  GET_POKEMON_BY_ID,
  GET_POKEMON_TYPES,
} from "../type/pokemon";
import axios from "../../helpers/axios";

export const getPokemon = (limit = 25) => async (dispatch) => {
  try {
    const res = await axios.get(`/pokemon?limit=${limit}`);
    dispatch({ type: GET_POKEMON, payload: res.data.results });
  } catch (e) {
    console.log(e);
    dispatch({ type: GET_POKEMON, payload: e });
  }
};
export const getPokemonById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/pokemon/${id}`);
    dispatch({ type: GET_POKEMON_BY_ID, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: GET_POKEMON_BY_ID, payload: e });
  }
};
