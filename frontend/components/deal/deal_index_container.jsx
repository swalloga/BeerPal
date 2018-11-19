import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import DealIndexComponent from './deal_index';
import { fetchDeals } from '../../actions/deal_actions';

const msp = state => {
  return {
    errors: state.errors,
    deals: state.entities.deals,
    bars: state.entities.bars,
    beers: state.entities.beers,
  };
};

const mdp = dispatch => {
  return {
    fetchDeals: (date, cityId) => dispatch(fetchDeals(date, cityId))
  };
};

export default connect(msp, mdp)(DealIndexComponent);
