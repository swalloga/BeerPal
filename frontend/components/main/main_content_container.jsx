import { connect } from 'react-redux';
import MainContent from './main_content';
import { withRouter } from 'react-router-dom';
import { fetchDeals } from '../../actions/deal_actions';

const mdp = dispatch => {
  return({
    fetchDeals: (date, cityId) => dispatch(fetchDeals(date, cityId))
  }
  );
};
export default withRouter(connect(null, mdp)(MainContent));
