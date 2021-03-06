import * as DealAPIUtil from '../util/deal_api_util';
export const RECEIVE_DEALS = 'RECEIVE_DEALS';
export const RECEIVE_DEAL = 'RECEIVE_DEAL';
export const RECEIVE_DEAL_ERRORS = 'RECEIVE_DEAL_ERRORS';

// sync actions
export const receiveDeals = payload => {
  return{
    type: RECEIVE_DEALS,
    deals: payload.deals,
    bars: payload.bars,
    beers: payload.beers,
  };
};

export const receiveDeal = deal => ({
  type: RECEIVE_DEAL,
  deal,
});

export const receiveDealErrors = errors => {
  return ({
  type: RECEIVE_DEAL_ERRORS,
  errors
  });
};

// async actions
export const fetchDeals = (cityId) => dispatch => {
  return DealAPIUtil.fetchDeals(cityId).then(
    (payload) => dispatch(receiveDeals(payload)),
  err => dispatch(receiveDealErrors(err.responseJSON)));
};

export const fetchDeal = (id) => dispatch => {
  return DealAPIUtil.fetchDeal(id).then((deal) =>
  dispatch(receiveDeal(deal)),
  err => {
    return dispatch(receiveDealErrors(err.responseText));
  });
};

export const fetchDealsByBeerSearch = (beerName, cityId) => dispatch => {
  return DealAPIUtil.fetchDealsByBeerSearch(beerName, cityId).then(
    (payload) => dispatch(receiveDeals(payload)),
    err => dispatch(receiveDealErrors(err.responseJSON)));
};

export const fetchDealsByBarSearch = (barName, cityId) => dispatch => {
  return DealAPIUtil.fetchDealsByBarSearch(barName, cityId).then(
    (payload) => dispatch(receiveDeals(payload)),
    err => dispatch(receiveDealErrors(err.responseJSON)));
};
