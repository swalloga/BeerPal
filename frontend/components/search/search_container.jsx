import { connect } from 'react-redux';
import SearchComponent from './search';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  const { deals } = state.entities;
  return {
    deals
  };
};

export default withRouter(connect(msp, null)(SearchComponent));
