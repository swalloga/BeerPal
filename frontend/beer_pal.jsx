import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as DealActions from './util/deal_api_util';
import * as BarActions from './actions/bar_actions';
import * as CityActions from './actions/city_actions';

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
  window.fetchDeals = DealActions.fetchDeals;
  window.fetchDeal = DealActions.fetchDeal;
  window.fetchAllBars = BarActions.fetchAllBars;
  window.fetchAllCities =CityActions.fetchAllCities;
  // TESTING END
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
});
