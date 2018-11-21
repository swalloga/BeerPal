import { connect } from 'react-redux';
import SearchComponent from './search';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  const { deals } = state.entities;
  return {
    deals
  };
};

const mdp = (dispatch) => {
  return {

  };
};

export default withRouter(connect(msp, null)(SearchComponent));
