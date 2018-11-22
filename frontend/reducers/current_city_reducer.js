import { merge } from 'lodash';
import { SET_CURRENT_CITY, RECEIVE_ALL_CITIES } from '../actions/city_actions';

const currentCityReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_CITY:
    return action.currentCityId;
    case RECEIVE_ALL_CITIES:
    return action.defaultCity.id;
    default:
      return state;
  }
};

export default currentCityReducer;
