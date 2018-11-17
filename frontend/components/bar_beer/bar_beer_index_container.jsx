import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import BarBeerComponent from './bar_beer_index';
import { fetchAllBarBeers } from '../../actions/bar_beer_actions';

const msp = state => {
  return {
    errors: state.errors,
    barBeers: state.barBeers,
    currentBarBeer: state.barBeer,
  };
};

const mdp = dispatch => {
  return {
    // TODO: what goes in here?? thunk action that gets all barbeer and bar and beer info
    fetchAllBarBeers: () => dispatch(fetchBarBeer())
  };
};

export default connect(msp, mdp)(BarBeerComponent);
