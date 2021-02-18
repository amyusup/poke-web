import {
  GET_POKEMON,
  GET_POKEMON_BY_ID,
  ADD_POKEMON,
  GET_MY_POKEMON,
  DELETE_MY_POKEMON,
  DELETE_ALL_MY_POKEMON
} from "../type/pokemon";
import axios from "../../helpers/axios";
import axios2 from "../../helpers/axios2";

export const getPokemon = (limit = 25) => async (dispatch) => {
  try {
    const res = await axios.get(`/pokemon?limit=${limit}`);
    dispatch({ type: GET_POKEMON, payload: res.data.results });
  } catch (e) {
    console.log(e);
    dispatch({ type: GET_POKEMON, payload: e });
  }
};
export const getMyPokemon = (limit = 25) => async (dispatch) => {
  try {
    const res = await axios2.get(`/pokemon?limit=${limit}`);
    dispatch({ type: GET_MY_POKEMON, payload: res.data.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: GET_MY_POKEMON, payload: e });
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
export const addPokemon = (data) => async (dispatch) => {
  try {
    const res = await axios2.post(`/pokemon`, data);
    dispatch({ type: ADD_POKEMON, payload: res.data.message });
    alert('Pokemon data has been saved')
  } catch (e) {
    // console.log(e);
    alert('Pokemon data has been saved')
    dispatch({ type: ADD_POKEMON, payload: e.response.data.data.message });
  }
};

export const deleteMyPokemon = (pokeId) => async (dispatch) => {
  dispatch({ type: DELETE_MY_POKEMON, payload: '' });
  try {
    const res = await axios2.delete(`/pokemon/${pokeId}`);
    dispatch({ type: DELETE_MY_POKEMON, payload: res.data.message });
    alert('Pokemon data has been delete')
  } catch (e) {
    // console.log(e);
    alert('Pokemon data failed to delete')
    dispatch({ type: DELETE_MY_POKEMON, payload: e.response.data.data.message });
  }
};
export const deleteAllMyPokemon = () => async (dispatch) => {
  dispatch({ type: DELETE_MY_POKEMON, payload: '' });
  try {
    const res = await axios2.delete(`/pokemon`);
    dispatch({ type: DELETE_ALL_MY_POKEMON, payload: res.data.message });
    alert('All pokemon data has been delete')
  } catch (e) {
    // console.log(e);
    alert('All pokemon data failed to delete')
    dispatch({ type: DELETE_ALL_MY_POKEMON, payload: e.response.data.data.message });
  }
};
