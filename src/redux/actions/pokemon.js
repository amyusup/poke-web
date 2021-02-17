import { GET_POKEMON } from '../type/pokemon'
import axios from '../../helpers/axios';

export const getPokemon = (offset = 0) => async (dispatch) => {
    try{
        const res = await axios.get(`/pokemon?offset=${offset}&limit=25`);
        dispatch({type: GET_POKEMON, payload: res.data.results});
    }catch(e){
        console.log(e)
        dispatch({type: GET_POKEMON, payload: e});
    }
  };

  