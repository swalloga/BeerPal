import { merge } from 'lodash';
import { RECEIVE_CITY } from '../actions/city_actions';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CITY:
    return { currentCityId: action.city.id };
    default:
      return state;
  }
};

export default uiReducer;
