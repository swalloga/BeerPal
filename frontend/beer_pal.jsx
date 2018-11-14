import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import * as APIUtil from './util/session_api_util';
// END TESTING

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  // TEST
  window.login = APIUtil.login;
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.getState = store.getState;
  // END TEST

  ReactDOM.render(<Root store={store}/>, root);
});
