import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CityDropdownComponent from './city_dropdown';
import { fetchAllCities, setCurrentCity } from '../../actions/city_actions';

const msp = state => {
  const { cities } = state.entities;
  const { currentCityId } = state.ui;
  const currentCityName = cities[currentCityId] ? cities[currentCityId].name : '';
  return {
    cities: Object.values(cities),
    currentCityName,
    currentCityId
  };
};

const mdp = dispatch => {
  return {
    fetchAllCities: () => dispatch(fetchAllCities()),
    setCurrentCity: (selectedCityId) => {
      dispatch(setCurrentCity(selectedCityId));
    },
  };
};

export default connect(msp, mdp)(CityDropdownComponent);
