import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import DealIndexComponent from './deal_index';
import { fetchDeals } from '../../actions/deal_actions';
import { fetchAllCities, setCurrentCity } from '../../actions/city_actions';
import {
  fetchFavorites,
  createFavorite,
  deleteFavorite
 } from '../../actions/favorite_actions';
import {
  clearReservationErrors,
  createReservation,
  deleteReservation
 } from '../../actions/reservation_actions';

const msp = (state, ownProps) => {
  const { reservations, favorites } = state.entities || [];
  return {
    errors: state.errors,
    deals: state.entities.deals,
    bars: state.entities.bars,
    beers: state.entities.beers,
    cities: state.entities.cities,
    currentCityId: state.ui.currentCityId,
    reservations: reservations,
    favorites: favorites,
    reservationForToday: state.ui.reservationForToday
  };
};

const mdp = dispatch => {
  return {
    fetchAllCities: () => dispatch(fetchAllCities()),
    setCurrentCity: (currentCityId) => {
      dispatch(setCurrentCity(currentCityId));
    },
    fetchDeals: (cityId) => dispatch(fetchDeals(cityId)),
    clearReservationErrors: () => dispatch(clearReservationErrors()),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    fetchFavorites: () => dispatch(fetchFavorites()),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId)),
  };
};

export default connect(msp, mdp)(DealIndexComponent);
