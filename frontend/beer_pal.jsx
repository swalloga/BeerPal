import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as FavoriteActions from './actions/favorite_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    if (window.reservationForToday) {
      preloadedState.ui = {reservationForToday: window.reservationForToday.id};
      preloadedState.entities.reservations = {[window.reservationForToday.id]: window.reservationForToday}
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchFavorites = FavoriteActions.fetchFavorites;
  window.createFavorite = FavoriteActions.createFavorite;
  window.deleteFavorite = FavoriteActions.deleteFavorite;
  // TESTING END
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
});
