import { merge } from 'lodash';
import { RECEIVE_RESERVATION_ERRORS } from '../actions/reservation_actions';

export default (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};
