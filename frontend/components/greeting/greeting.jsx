import React from 'react';
import { Link } from 'react-router-dom';
// TODO: Setup demo user?? maybe a button that logs in a demo user setup in seed?

const Greeting = props => {
    if (props.currentUser) {
      return(
        <div className="nav-bar">
          <h1><Link to="/">beerpal</Link></h1>
          <h3>Hey {props.currentUser.username}</h3>
          <button onClick={props.logout}>Logout</button>
        </div>
    );
  } else {
      return(
        <div className="nav-bar">
          <h1><Link to="/">beerpal</Link></h1>
          <div>
            <Link to="/login">Log In</Link>
            <br/>
            <Link to="/login">Demo Log In</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    }
};

export default Greeting;
