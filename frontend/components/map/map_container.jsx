import { connect } from 'react-redux';
import MapComponent from './map';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  const { cities } = state.entities;
  const { currentCityId } = state.ui;
  const { deals } = state.entities.deals || " ";
  const currentCityLat = cities[currentCityId] ? cities[currentCityId].latitude : '';
  const currentCityLon = cities[currentCityId] ? cities[currentCityId].longitude : '';

  return {
    cities: Object.values(cities),
    currentCityId,
    currentCityLat,
    currentCityLon,
    deals
  };
};

const mdp = (dispatch) => {
  return {

  };
};

export default withRouter(connect(msp, null)(MapComponent));
