import { merge } from 'lodash';
import {
  RECEIVE_ALL_BARS,
  RECEIVE_BAR,
  RECEIVE_BAR_ERRORS
} from '../actions/bar_actions';
import { RECEIVE_ALL_DEALS } from '../actions/deal_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BARS:
      return merge({}, action.bars);
    case RECEIVE_BAR:
      newState = { [action.bar.id]: action.bar };
      return merge({},state, newState);
    case RECEIVE_ALL_DEALS:
      newState = action.bars;
      return merge({}, state, newState);
    case RECEIVE_BAR_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};
