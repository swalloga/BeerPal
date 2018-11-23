import { merge } from 'lodash';
import {
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATION_ERRORS,
  REMOVE_RESERVATION
} from '../actions/reservation_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      newState = action.data.reservations;
      return merge({}, newState);
    case RECEIVE_RESERVATION:
      newState = { [action.reservation.id]: action.reservation };
      return merge({},state, newState);
    case REMOVE_RESERVATION:
      newState = merge({}, state);
      delete newState[action.reservationId];
      return newState;
    default:
      return state;
  }
};
