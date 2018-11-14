import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <div className="content">
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;
