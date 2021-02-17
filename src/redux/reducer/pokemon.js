import { GET_POKEMON } from "../type/pokemon";

const initialState = {
  pokemon: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
