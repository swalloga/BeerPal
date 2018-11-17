import * as BarBeerAPIUtil from '../util/bar_beer_api_util';
export const RECEIVE_ALL_BAR_BEERS = 'RECEIVE_ALL_BAR_BEERS';
export const RECEIVE_BAR_BEER = 'RECEIVE_BAR_BEER';
export const RECEIVE_BAR_BEER_ERRORS = 'RECEIVE_BAR_BEER_ERRORS';

// sync actions
export const receiveBarBeers = barBeers => ({
  type: RECEIVE_ALL_BAR_BEERS,
  barBeers,
});

export const receiveBarBeer = barBeer => ({
  type: RECEIVE_BAR_BEER,
  barBeer,
});

export const receiveBarBeerErrors = errors => {
  return ({
  type: RECEIVE_BAR_BEER_ERRORS,
  errors
  });
};

// async actions
    // TODO: come back and fix errors. right now they're very ugly
export const fetchAllBarBeers = () => dispatch => {
  return BarBeerAPIUtil.fetchAllBarBeers().then((barBeers) =>
  dispatch(receiveBarBeers(barBeers)),
  err => dispatch(receiveBarBeerErrors(err.responseJSON)));
};

export const fetchBarBeer = (id) => dispatch => {
  return BarBeerAPIUtil.fetchBarBeer(id).then((barBeer) =>
  dispatch(receiveBarBeer(barBeer)),
  err => {
    return dispatch(receiveBarBeerErrors(err.responseText));
  });
};

export const fetchBarBeersByBeer = (beerId) => dispatch => {
  return BarBeerAPIUtil.fetchBarBeersByBeer(beerId).then((barBeers) => dispatch(receiveBarBeers(barBeers)),
  err => dispatch(receiveBarBeerErrors(err.responseJSON)));
};

export const fetchBarBeerByBar = (barId) => dispatch => {
  return BarBeerAPIUtil.fetchBarBeerByBar(barId).then((barBeers) => dispatch(receiveBarBeers(barBeers)),
  err => dispatch(receiveBarBeerErrors(err.responseJSON)));
};
