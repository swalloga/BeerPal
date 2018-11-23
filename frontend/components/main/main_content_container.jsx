import { connect } from 'react-redux';
import MainContent from './main_content';
import { withRouter } from 'react-router-dom';
import { fetchDeals } from '../../actions/deal_actions';
import { fetchAllCities, setCurrentCity } from '../../actions/city_actions';

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
export default withRouter(connect(null, mdp)(MainContent));
