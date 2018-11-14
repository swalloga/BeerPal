import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
    if (props.currentUser) {
      return(
        <div>
          <h3>Hey {props.currentUser.username}</h3>
          <button onClick={props.logout}>Logout</button>
        </div>
    );
  } else {
      return(
        <div>
          <h3>Hey pal</h3>
          <Link to="/login">Log In</Link>
          <br/>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
};

export default Greeting;
