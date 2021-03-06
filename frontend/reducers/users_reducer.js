import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/account_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {[action.currentUser.id]: action.currentUser};
      return merge({}, state, newState);
    case RECEIVE_USER:
      newState = { [action.user.user.id]: action.user.user };
      return merge({}, state, newState);
    default:
      return state;
  }
};
