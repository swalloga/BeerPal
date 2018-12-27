import { combineReducers } from 'redux';
import currentCityReducer from './current_city_reducer';
import currentReservationReducer from './current_reservation_reducer';
import currentEmailReducer from './current_email_reducer';

export default combineReducers({
  currentCityId: currentCityReducer,
  reservationForToday: currentReservationReducer,
  currentEmail: currentEmailReducer
});
