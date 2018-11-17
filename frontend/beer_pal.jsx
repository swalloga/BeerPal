import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as BarBeerActions from './actions/bar_beer_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllBarBeers = BarBeerActions.fetchAllBarBeers;
  window.fetchBarBeer = BarBeerActions.fetchBarBeer;
  window.fetchBarBeerByBar = BarBeerActions.fetchBarBeerByBar;

  // TESTING END
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
});
