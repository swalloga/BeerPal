import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import beersReducer from './beers_reducer';
import barsReducer from './bars_reducer';
import citiesReducer from './cities_reducer';
import barBeerReducer from './bar_beers_reducer';

export default combineReducers({
  users: usersReducer,
  // beers: beersReducer,
  // bars: barsReducer,
  // cities: citiesReducer,
  barBeers: barBeerReducer,
});
// QUESTION: i dont think i need the beers, bars and cities reducers in state. do i need them at all?
