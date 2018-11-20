import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import DealIndexComponent from './deal_index';
import { fetchDeals } from '../../actions/deal_actions';
import { fetchAllCities, setCurrentCity } from '../../actions/city_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors,
    deals: state.entities.deals,
    bars: state.entities.bars,
    beers: state.entities.beers,
    cities: state.entities.cities,
    currentCityId: state.ui.currentCityId
  };
};

const mdp = dispatch => {
  return {
    fetchAllCities: () => dispatch(fetchAllCities()),
    setCurrentCity: (currentCityId) => {
      dispatch(setCurrentCity(currentCityId));
    },
    fetchDeals: (date, cityId) => dispatch(fetchDeals(date, cityId))
  };
};

export default connect(msp, mdp)(DealIndexComponent);
