import { merge } from 'lodash';
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';

export default (state= null, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return action.reservation.id;
    case REMOVE_RESERVATION:
      newState = null;
      return newState;

    default:
      return state;
  }
};
