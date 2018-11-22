import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import DealIndexComponent from './deal_index';
import { fetchDeals } from '../../actions/deal_actions';
import { fetchAllCities, setCurrentCity } from '../../actions/city_actions';
import { createReservation, deleteReservation } from '../../actions/reservation_actions';

const msp = (state, ownProps) => {
  const { reservations } = state.entities || [];
  return {
    errors: state.errors,
    deals: state.entities.deals,
    bars: state.entities.bars,
    beers: state.entities.beers,
    cities: state.entities.cities,
    currentCityId: state.ui.currentCityId,
    reservations: reservations,
  };
};

const mdp = dispatch => {
  return {
    fetchAllCities: () => dispatch(fetchAllCities()),
    setCurrentCity: (currentCityId) => {
      dispatch(setCurrentCity(currentCityId));
    },
    fetchDeals: (date, cityId) => dispatch(fetchDeals(date, cityId)),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
  };
};

export default connect(msp, mdp)(DealIndexComponent);
