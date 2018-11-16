import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import beersReducer from './beers_reducer';
import barsReducer from './bars_reducer';
import citiesReducer from './cities_reducer';

export default combineReducers({
  users: usersReducer,
  beers: beersReducer,
  bars: barsReducer,
  cities: citiesReducer,
});
