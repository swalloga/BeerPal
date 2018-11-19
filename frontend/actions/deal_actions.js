import * as DealAPIUtil from '../util/deal_api_util';
export const RECEIVE_ALL_DEALS = 'RECEIVE_ALL_DEALS';
export const RECEIVE_DEAL = 'RECEIVE_DEAL';
export const RECEIVE_DEAL_ERRORS = 'RECEIVE_DEAL_ERRORS';

// sync actions
export const receiveDeals = payload => ({
  type: RECEIVE_ALL_DEALS,
  deals: payload.deals,
  bars: payload.bars,
  beers: payload.beers,
  cities: payload.cities,
});

export const receiveDealsByDate = (deals, date = "2019-01-01") => {
  deals = Object.values(deals).filter(
    (deal) => deal.date === date );
  return {
    type: RECEIVE_ALL_DEALS,
    deals,
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
    // TODO: come back and fix errors. right now they're very ugly
export const fetchAllDeals = () => dispatch => {
  return DealAPIUtil.fetchAllDeals().then((payload) =>
  dispatch(receiveDeals(payload)),
  err => dispatch(receiveDealErrors(err.responseJSON)));
};

export const fetchDeal = (id) => dispatch => {
  return DealAPIUtil.fetchDeal(id).then((deal) =>
  dispatch(receiveDeal(deal)),
  err => {
    return dispatch(receiveDealErrors(err.responseText));
  });
};

// TODO: update fetch dealsbydate
export const fetchDealsByDate = (date) => dispatch => {
  return DealAPIUtil.fetchAllDeals().then(
    (deals) => dispatch(receiveDealsByDate(deals, date)),
    err => dispatch(receiveDealErrors(err.responseJSON)));
};

export const fetchDealsByBeer = (beerId) => dispatch => {
  return DealAPIUtil.fetchDealsByBeer(beerId).then(
    (deals) => dispatch(receiveDeals(deals)),
  err => dispatch(receiveDealErrors(err.responseJSON)));
};

export const fetchDealByBar = (barId) => dispatch => {
  return DealAPIUtil.fetchDealByBar(barId).then(
    (deals) => dispatch(receiveDeals(deals)),
  err => dispatch(receiveDealErrors(err.responseJSON)));
};
