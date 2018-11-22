import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  receiveReservationErrors,
  createReservation,
  updateReservation,
  deleteReservation,
 } from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    updateReservation: (reservation) => dispatch(updateReservation(reservation)),
    deleteReservation: (reservation) => dispatch(deleteReservation(reservation.id)),
    clearErrors: () => dispatch(receiveReservationErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
