import * as CityAPIUtil from '../util/city_api_util';
export const RECEIVE_ALL_CITIES = 'RECEIVE_ALL_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';
export const RECEIVE_CITY_ERRORS = 'RECEIVE_CITY_ERRORS';
export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';

// sync actions
export const receiveCities = payload => ({
  type: RECEIVE_ALL_CITIES,
  cities: payload.cities,
  defaultCity: payload.defaultCity
});

export const receiveCity = city => ({
  type: RECEIVE_CITY,
  city,
});

export const receiveCityErrors = errors => {
  return ({
  type: RECEIVE_CITY_ERRORS,
  errors
  });
};

export const setCurrentCity = (currentCityId = 1) =>{
  return ({
    type: SET_CURRENT_CITY,
    currentCityId
  });
};
// async actions
    // TODO: come back and fix errors. right now they're very ugly
export const fetchAllCities = () => dispatch => {
  return CityAPIUtil.fetchAllCities().then((payload) => dispatch(receiveCities(payload)),
  err => dispatch(receiveCityErrors(err.responseJSON)));
};

export const fetchCity = (id) => dispatch => {
  return CityAPIUtil.fetchCity(id).then((city) => dispatch(receiveCity(city)),
  err => {
    return dispatch(receiveCityErrors(err.responseText));
  });
};
