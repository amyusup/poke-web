import { GET_POKEMON, GET_POKEMON_BY_ID, ADD_POKEMON, GET_MY_POKEMON, DELETE_MY_POKEMON, DELETE_ALL_MY_POKEMON } from "../type/pokemon";

const initialState = {
  pokemon: [],
  myPokemon: [],
  pokemonById: [],
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };
    case GET_MY_POKEMON:
      return {
        ...state,
        myPokemon: action.payload,
      };
    case ADD_POKEMON:
      return {
        ...state,
        message: action.payload,
      };
    case DELETE_MY_POKEMON:
      return {
        ...state,
        message: action.payload,
      };
    case DELETE_ALL_MY_POKEMON:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return {...state}
  }
};
