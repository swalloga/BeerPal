import React from 'react';
import { connect } from 'react-redux';
import SearchFieldComponent from './search_field';

import { fetchDealsByBeerSearch, fetchDealsByBarSearch, fetchDeals } from '../../actions/deal_actions';

const msp = (state) => {
  const { bars, beers, deals } = state.entities || [];
  return {
    errors: state.errors,
    deals,
    bars,
    beers,
    currentCityId: state.ui.currentCityId,
  };
};

const mdp = dispatch => {
  return {
    fetchDealsByBeerSearch: (beerName, cityId) => dispatch(fetchDealsByBeerSearch(beerName, cityId)),
    fetchDealsByBarSearch: (barName, cityId) => dispatch(fetchDealsByBarSearch(barName, cityId)),
    fetchDeals: (cityId) => dispatch(fetchDeals(cityId)),
  };
};

export default connect(msp, mdp)(SearchFieldComponent);
