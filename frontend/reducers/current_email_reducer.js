import { merge } from 'lodash';
import { UPDATE_TEMP_EMAIL } from '../actions/session_actions';

const currentEmailReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case UPDATE_TEMP_EMAIL:
    return action.email;
    default:
      return state;
  }
};

export default currentEmailReducer;
