import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainContentContainer from './main/main_content_container';
import FooterContainer from './footer/footer_container';
import SearchContainer from './search/search_container';
import ReservationIndexContainer from './reservation/reservation_index_container';
import FavoriteIndexContainer from './favorite/favorite_index_container';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <div className="body">
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainContentContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/happyhour" component={SearchContainer} />
      <ProtectedRoute path="/my-account" component={ReservationIndexContainer} />
      <ProtectedRoute path="/favorites" component={FavoriteIndexContainer} />
    </div>
    <footer>
      <FooterContainer />
    </footer>
  </div>
);

export default App;
