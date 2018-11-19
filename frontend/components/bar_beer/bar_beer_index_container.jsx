import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import BarBeerIndexComponent from './bar_beer_index';
import { fetchAllBarBeers, fetchBarBeersByDate } from '../../actions/bar_beer_actions';

const msp = state => {
  return {
    errors: state.errors,
    barBeers: state.entities.barBeers,
    bars: state.entities.bars,
    beers: state.entities.beers,
    currentBarBeer: state.entities.barBeer,
  };
};

const mdp = dispatch => {
  return {
    fetchAllBarBeers: () => dispatch(fetchAllBarBeers()),
    fetchBarBeersByDate: () => dispatch(fetchBarBeersByDate())
  };
};

export default connect(msp, mdp)(BarBeerIndexComponent);
