import { connect } from 'react-redux';
import MainContent from './main_content';
import { withRouter } from 'react-router-dom';
import { fetchDeals } from '../../actions/deal_actions';
import { fetchAllCities, setCurrentCity } from '../../actions/city_actions';

const msp = state => {
  const { deals } = state.entities || " ";
  return { deals };
};

const mdp = dispatch => {
  return({
    fetchAllCities: () => dispatch(fetchAllCities()),
    setCurrentCity: (currentCityId) => {
      dispatch(setCurrentCity(currentCityId));
    },
    fetchDeals: (cityId) => dispatch(fetchDeals(cityId))
  }
  );
};
export default withRouter(connect(msp, mdp)(MainContent));
