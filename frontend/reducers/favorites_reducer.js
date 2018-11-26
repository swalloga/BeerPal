import { merge } from 'lodash';
import {
  RECEIVE_FAVORITES,
  RECEIVE_FAVORITE,
  RECEIVE_FAVORITE_ERRORS,
  REMOVE_FAVORITE
} from '../actions/favorite_actions';

export default (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_FAVORITES:
      newState = action.data.favorites;
      return merge({}, newState);
    case RECEIVE_FAVORITE:
      newState = { [action.favorite.id]: action.favorite };
      return merge({},state, newState);
    case REMOVE_FAVORITE:
      newState = merge({}, state);
      delete newState[action.favoriteId];
      return newState;
    default:
      return state;
  }
};
