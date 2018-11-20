import { merge } from 'lodash';
import { SET_CURRENT_CITY, RECEIVE_ALL_CITIES } from '../actions/city_actions';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_CITY:
    return { currentCityId: action.currentCityId };
    case RECEIVE_ALL_CITIES:
    return { currentCityId: action.defaultCity.id };
    default:
      return state;
  }
};

export default uiReducer;
