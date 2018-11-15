import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// TODO: Setup demo user?? maybe a button that logs in a demo user setup in seed?

const Greeting = props => {

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
          <h1><Link to="/">beerpal</Link></h1>
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
