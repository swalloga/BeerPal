import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import * as sessionAction from './actions/session_actions';
// END TESTING

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
  const root = document.getElementById('root');
  // TEST
  window.login = sessionAction.login;
  window.signup = sessionAction.signup;
  window.logout = sessionAction.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // END TEST

  ReactDOM.render(<Root store={store}/>, root);
});
