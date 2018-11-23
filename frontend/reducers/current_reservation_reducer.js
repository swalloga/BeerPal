import { merge } from 'lodash';
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state= null, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return action.reservation.id;
    case REMOVE_RESERVATION:
      newState = null;
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = null;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = action.reservationForToday ? action.reservationForToday.id : null;
      return newState;
    default:
      return state;
  }
};
