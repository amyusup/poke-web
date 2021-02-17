import { GET_POKEMON, GET_POKEMON_BY_ID, GET_POKEMON_TYPES } from "../type/pokemon";

const initialState = {
  pokemon: [],
  pokemonById: [],
  pokemonTypes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_POKEMON_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
