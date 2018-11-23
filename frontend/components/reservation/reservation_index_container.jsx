import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationIndexComponent from './reservation_index';
import { fetchReservations, deleteReservation } from '../../actions/reservation_actions';

const msp = (state) => {
  const { reservations, bars, beers } = state.entities || [];
  return {
    errors: state.errors,
    reservations,
    bars,
    beers,
    reservationForToday: state.ui.reservationForToday
  };
};

const mdp = (dispatch) => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
  };
};

export default withRouter(connect(msp, mdp)(ReservationIndexComponent));
