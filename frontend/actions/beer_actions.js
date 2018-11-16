import * as BeerAPIUtil from '../util/beer_api_util';
export const RECEIVE_ALL_BEERS = 'RECEIVE_ALL_BEERS';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const RECEIVE_BEER_ERRORS = 'RECEIVE_BEER_ERRORS';

// sync actions
export const receiveBeers = beers => ({
  type: RECEIVE_ALL_BEERS,
  beers,
});

export const receiveBeer = beer => ({
  type: RECEIVE_BEER,
  beer,
});

export const receiveBeerErrors = errors => {
  return ({
  type: RECEIVE_BEER_ERRORS,
  errors
  });
};

// async actions
    // TODO: come back and fix errors. right now they're very ugly
export const fetchAllBeers = () => dispatch => {
  return BeerAPIUtil.fetchAllBeers().then((beers) => dispatch(receiveBeers(beers)),
  err => dispatch(receiveBeerErrors(err.responseJSON)));
};

export const fetchBeer = (id) => dispatch => {
  return BeerAPIUtil.fetchBeer(id).then((beer) => dispatch(receiveBeer(beer)),
  err => {
    return dispatch(receiveBeerErrors(err.responseText));
  });
};
