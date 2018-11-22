import { merge } from 'lodash';
import {
  RECEIVE_ALL_BEERS,
  RECEIVE_BEER,
  RECEIVE_BEER_ERRORS
} from '../actions/beer_actions';
import { RECEIVE_RESERVATIONS } from '../actions/reservation_actions';
import { RECEIVE_DEALS } from '../actions/deal_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return merge({}, action.beers);
    case RECEIVE_BEER:
      newState = { [action.beer.id]: action.beer };
      return merge({},state, newState);
    case RECEIVE_DEALS:
      newState = action.beers;
      return merge({}, state, newState);
    case RECEIVE_RESERVATIONS:
      newState = action.data.beers;
      return merge({}, newState);
    case RECEIVE_BEER_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};
