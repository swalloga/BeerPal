import { merge } from 'lodash';
import { SET_CURRENT_CITY } from '../actions/city_actions';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case SET_CURRENT_CITY:
    return { currentCityId: action.currentCityId };
    default:
      return state;
  }
};

export default uiReducer;
