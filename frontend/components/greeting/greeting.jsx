import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Greeting = props => {
// TODO: change line 23 to direct back to /
  let navColor;
    if ((props.path === "/")||(props.path === "/happyhour")) {
      navColor = "orange";
    } else {
      navColor ="white";
    }
    if (props.currentUser) {
      return(
        <div className={`nav-bar ${navColor}`}>
          <h1><Link to="/">beerpal</Link></h1>
          <h3>Hey { props.currentUser.name }</h3>
          <div className="dropdown">
            <button className="dropbtn">||| Menu</button>
            <div className="dropdown-content">
              <Link to="/happyhour">Happy Hour</Link>
              <Link to="/my-account">My Account</Link>
              <Link to="/favorites">Favorites</Link>
              <button onClick={ props.logout }>Logout</button>
            </div>
          </div>
        </div>
    );
  } else {
      return(
        <div className={`nav-bar ${navColor}`}>
          <h1><Link to="/happyhour">beerpal</Link></h1>
          <div className="loggedOut-nav">
            <button onClick={ props.demoSignUp } >Demo Log In</button>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    }
};

export default Greeting;
