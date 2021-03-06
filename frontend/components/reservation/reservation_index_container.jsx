import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationIndexComponent from './reservation_index';
import { getCurrentUserInfo } from '../../actions/session_actions';
import { updateUser } from '../../actions/account_actions';
import {
  fetchReservations,
  deleteReservation
} from '../../actions/reservation_actions';

const msp = (state) => {
  const { reservations, bars, beers } = state.entities || [];
  return {
    errors: state.errors,
    reservations,
    bars,
    beers,
    reservationForToday: state.ui.reservationForToday,
    users: state.entities.users,
    currentUserId: state.session.id
  };
};

const mdp = (dispatch) => {
  return {
    updateUser: (user, beerQty) => dispatch(updateUser(user, beerQty)),
    getCurrentUserInfo: (id) => dispatch(getCurrentUserInfo(id)),
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
  };
};

export default withRouter(connect(msp, mdp)(ReservationIndexComponent));
