import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainContentContainer from './main/main_content_container';
import FooterContainer from './footer/footer_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <div>
      <AuthRoute exact path="/" component={MainContentContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
    <footer>
      <FooterContainer />
    </footer>
  </div>
);

export default App;
