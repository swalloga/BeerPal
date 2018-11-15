import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, demoSignUp} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    path: ownProps.location.pathname,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    demoSignUp: () => dispatch(demoSignUp())
  };
};

export default withRouter(connect(msp, mdp)(Greeting));