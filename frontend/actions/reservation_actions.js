import * as ReservationAPIUtil from '../util/reservation_api_util';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

// sync actions
export const receiveReservations = payload => ({
  type: RECEIVE_RESERVATIONS,
  data: {
    reservations: payload.reservations,
    bars: payload.bars,
    beers: payload.beers,
  },
});

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation,
});

export const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
});

export const receiveReservationErrors = errors => {
  return ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
  });
};

// async actions
    // TODO: come back and fix errors. right now they're very ugly
export const fetchReservations = () => dispatch => {
  return ReservationAPIUtil.fetchReservations()
  .then((payload) => dispatch(receiveReservations(payload)),
  err => dispatch(receiveReservationErrors(err.responseJSON)));
};

export const fetchReservation = (id) => dispatch => {
  return ReservationAPIUtil.fetchReservation(id)
  .then((reservation) => dispatch(receiveReservation(reservation)),
  err => {
    return dispatch(receiveReservationErrors(err.responseText));
  });
};

export const createReservation = (reservation) => dispatch => {
  return ReservationAPIUtil.createReservation(reservation)
  .then((reservation) => dispatch(receiveReservation(reservation)),
  err => {
    return dispatch(receiveReservationErrors(err.responseJSON));
  });
};

export const updateReservation = (reservation) => dispatch => {
  return ReservationAPIUtil.updateReservation(reservation)
  .then((reservation) => dispatch(receiveReservation(reservation)),
  err => {
    return dispatch(receiveReservationErrors(err.responseJSON));
  });
};

export const deleteReservation = (reservationId) => dispatch => {
  return ReservationAPIUtil.deleteReservation(reservationId)
  .then(() => dispatch(removeReservation(reservationId)),
  err => {
    return dispatch(receiveReservationErrors(err.responseJSON));
  });
};
