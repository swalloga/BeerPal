import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  // TEST
  window.login = APIUtil.login;
  window.signup = APIUtil.signup;
  window.logout = APIUtil.logout;
  // window.getState = store.getState;
  // END TEST

  ReactDOM.render(<h1>BeerPal is here, pal</h1>, root);
});
