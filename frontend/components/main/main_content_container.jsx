import { connect } from 'react-redux';
import MainContent from './main_content';
import { withRouter } from 'react-router-dom';
import { fetchDeals } from '../../actions/deal_actions';
import { fetchAllCities, setCurrentCity } from '../../actions/city_actions';
import { updateTempEmail } from '../../actions/session_actions';

const msp = state => {
  const { deals } = state.entities || " ";
  return {
    deals,
    currentCityId: state.ui.currentCityId,
  };
};

const mdp = dispatch => {
  return({
    fetchAllCities: () => dispatch(fetchAllCities()),
    setCurrentCity: (currentCityId) => {
      dispatch(setCurrentCity(currentCityId));
    },
    fetchDeals: (cityId) => dispatch(fetchDeals(cityId)),
    updateTempEmail: (email) => dispatch(updateTempEmail(email))
  }
  );
};
export default withRouter(connect(msp, mdp)(MainContent));
