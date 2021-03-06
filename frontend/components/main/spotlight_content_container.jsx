import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SpotlightCarousel from './spotlight_content';

const msp = state => {
  const { deals } = state.entities || " ";
  const { bars } = state.entities || " ";
  const { beers } = state.entities || " ";
  return {
    deals,
    bars,
    beers
  };
};

export default withRouter(connect(msp, null)(SpotlightCarousel));
