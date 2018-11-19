import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import DealIndexComponent from './deal_index';
import { fetchAllDeals, fetchDealsByDate } from '../../actions/deal_actions';

const msp = state => {
  return {
    errors: state.errors,
    deals: state.entities.deals,
    bars: state.entities.bars,
    beers: state.entities.beers,
    cities: state.entities.cities,
    currentDeal: state.entities.deal,
  };
};

const mdp = dispatch => {
  return {
    fetchAllDeals: () => dispatch(fetchAllDeals()),
    fetchDealsByDate: () => dispatch(fetchDealsByDate())
  };
};

export default connect(msp, mdp)(DealIndexComponent);
