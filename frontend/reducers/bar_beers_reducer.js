import { merge } from 'lodash';
import {
  RECEIVE_ALL_BAR_BEERS,
  RECEIVE_BAR_BEER,
  RECEIVE_BAR_BEER_ERRORS
} from '../actions/bar_beer_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BAR_BEERS:
      newState = action.barBeers;
      return merge({}, newState);
    case RECEIVE_BAR_BEER:
      newState = { [action.barBeer.id]: action.barBeer };
      return merge({},state, newState);
    case RECEIVE_BAR_BEER_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};
