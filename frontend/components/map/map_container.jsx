import { connect } from 'react-redux';
import MapComponent from './map';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  const { cities } = state.entities;
  const { currentCityId } = state.ui;
  const { deals } = state.entities || " ";
  const { bars } = state.entities || " ";
  const currentCityLat = cities[currentCityId] ? cities[currentCityId].latitude : 0;
  const currentCityLon = cities[currentCityId] ? cities[currentCityId].longitude : 0;

  return {
    cities: Object.values(cities),
    currentCityId,
    currentCityLat,
    currentCityLon,
    deals,
    bars
  };
};

const mdp = (dispatch) => {
  return {

  };
};

export default withRouter(connect(msp, null)(MapComponent));
