import { merge } from 'lodash';
import {
  RECEIVE_DEALS,
  RECEIVE_DEAL,
  RECEIVE_DEAL_ERRORS
} from '../actions/deal_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_DEALS:
      newState = action.deals;
      return merge({}, newState);
    case RECEIVE_DEAL:
      newState = { [action.deal.id]: action.deal };
      return merge({},state, newState);
    case RECEIVE_DEAL_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};
