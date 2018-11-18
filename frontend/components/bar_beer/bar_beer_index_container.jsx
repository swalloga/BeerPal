import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import BarBeerIndexComponent from './bar_beer_index';
import { fetchAllBarBeers } from '../../actions/bar_beer_actions';

const msp = state => {
  return {
    errors: state.errors,
    barBeers: state.entities.barBeers,
    currentBarBeer: state.entities.barBeer,
  };
};

const mdp = dispatch => {
  return {
    fetchAllBarBeers: () => dispatch(fetchAllBarBeers())
  };
};

export default connect(msp, mdp)(BarBeerIndexComponent);
