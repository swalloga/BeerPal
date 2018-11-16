import { merge } from 'lodash';
import {
  RECEIVE_ALL_BEERS,
  RECEIVE_BEER,
  RECEIVE_BEER_ERRORS
} from '../actions/beer_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return merge({}, action.beers);
    case RECEIVE_BEER:
      newState = { [action.beer.id]: action.beer };
      return merge({},state, newState);
    case RECEIVE_BEER_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};
