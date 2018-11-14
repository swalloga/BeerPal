import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainContainerContainer from './main/main_content';
import FooterContainer from './footer/footer';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <div>
      <AuthRoute exact path="/" component={MainContainerContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
    <footer>
      <FooterContainer />
    </footer>
  </div>
);

export default App;
