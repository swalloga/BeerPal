import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CityDropdownComponent from './city_dropdown';

const msp = state => {
  return {
    cities: state.entities.cities
  };
};

const mdp = dispatch => {
  return {
  };
};

export default connect(msp, mdp)(CityDropdownComponent);
