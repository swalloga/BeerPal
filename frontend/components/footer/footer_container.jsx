import { connect } from 'react-redux';
import Footer from './footer';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    path: ownProps.location.pathname,
  };
};

const mdp = (dispatch) => {
  return {
  };
};

export default withRouter(connect(msp, null)(Footer));
