import { combineReducers } from 'redux'
import pokemonReducer from './pokemon'
export default combineReducers({
    pokemon:pokemonReducer,
})