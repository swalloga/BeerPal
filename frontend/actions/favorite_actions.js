import * as FavoriteAPIUtil from '../util/favorite_api_util';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITE_ERRORS = 'RECEIVE_FAVORITE_ERRORS';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// sync actions
export const receiveFavorites = payload => ({
  type: RECEIVE_FAVORITES,
  data: {
    favorites: payload.favorites,
  },
});

export const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite,
});

export const removeFavorite = favoriteId => {
  return{
    type: REMOVE_FAVORITE,
    favoriteId
  };
};

export const receiveFavoriteErrors = errors => {
  return ({
  type: RECEIVE_FAVORITE_ERRORS,
  errors
  });
};

// async actions
export const fetchFavorites = () => dispatch => {
  return FavoriteAPIUtil.fetchFavorites()
  .then((payload) => dispatch(receiveFavorites(payload)),
  err => dispatch(receiveFavoriteErrors(err.responseJSON)));
};

export const createFavorite = (favorite) => dispatch => {
  return FavoriteAPIUtil.createFavorite(favorite)
  .then((favorite) => dispatch(receiveFavorite(favorite)),
  err => {
    return dispatch(receiveFavoriteErrors(err.responseJSON));
  });
};

export const deleteFavorite = (favoriteId) => dispatch => {
  return FavoriteAPIUtil.deleteFavorite(favoriteId)
  .then(() => dispatch(removeFavorite(favoriteId)),
  err => {
    return dispatch(receiveFavoriteErrors(err.responseJSON));
  });
};
