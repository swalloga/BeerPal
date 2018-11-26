import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FavoriteIndexComponent from './favorite_index';
import { fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';

const msp = (state) => {
  const { favorites } = state.entities || [];
  return {
    errors: state.errors,
    favorites,
  };
};

const mdp = (dispatch) => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
    deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favoriteId))
  };
};

export default withRouter(connect(msp, mdp)(FavoriteIndexComponent));
