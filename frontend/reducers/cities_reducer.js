import { merge } from 'lodash';
import {
  RECEIVE_ALL_CITIES,
  RECEIVE_CITY,
  RECEIVE_CITY_ERRORS
} from '../actions/city_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return merge({}, action.cities);
    case RECEIVE_CITY:
      newState = { [action.city.id]: action.city };
      return merge({},state, newState);
    case RECEIVE_CITY_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};
