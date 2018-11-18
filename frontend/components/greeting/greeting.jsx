import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Greeting = props => {
// TODO: change line 23 to direct back to /
  let navColor;
    if (props.path === "/") {
      navColor = "orange";
    } else {
      navColor ="white";
    }
    if (props.currentUser) {
      return(
        <div className={`nav-bar ${navColor}`}>
          <h1><Link to="/">beerpal</Link></h1>
          <h3>Hey { props.currentUser.name }</h3>
          <button onClick={ props.logout }>Logout</button>
        </div>
    );
  } else {
      return(
        <div className={`nav-bar ${navColor}`}>
          <h1><Link to="/happyhour">beerpal</Link></h1>
          <div>
            <button onClick={ props.demoSignUp } >Demo Log In</button>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    }
};

export default Greeting;
