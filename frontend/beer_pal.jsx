import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as DealActions from './actions/deal_actions';
import * as BarActions from './actions/bar_actions';

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
  window.fetchAllDeals = DealActions.fetchAllDeals;
  window.fetchDealsByDate = DealActions.fetchDealsByDate;
  window.fetchDeal = DealActions.fetchDeal;
  window.fetchDealByBar = DealActions.fetchDealByBar;
  window.fetchAllBars = BarActions.fetchAllBars;

  // TESTING END
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
});
