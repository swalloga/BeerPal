import { merge } from 'lodash';
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';

export default (state= null, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RESERVATION:
      newState = action.reservation.id;
      return merge({}, newState);
    case REMOVE_RESERVATION:
      newState = null;
      return merge({}, newState);

    default:
      return state;
  }
};
