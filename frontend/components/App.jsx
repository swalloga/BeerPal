import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainContentContainer from './main/main_content_container';
import FooterContainer from './footer/footer_container';
import DealIndexContainer from './deal/deal_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <div className="body">
      <AuthRoute exact path="/" component={MainContentContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/happyhour" component={DealIndexContainer} />
    </div>
    <footer>
      <FooterContainer />
    </footer>
  </div>
);

export default App;
