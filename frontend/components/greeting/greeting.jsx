import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
          <h1><Link to="/happyhour">beerpal</Link></h1>
          <div id="wide-dropdown" className="dropdown">
            <button className="dropbtn">
              <img className="menu-icon icon" src={window.menu_icon} />
              <p>Menu</p>
            </button>
            <div className="dropdown-content">
              <div className="nav-HH">
                <img className="icon" src={window.hh_icon} />
                <Link to="/happyhour">Happy Hour</Link>
              </div>
              <div className="nav-account">
                <img className="icon" src={window.account_icon} />
                <Link to="/my-account">My Account</Link>
              </div>
              <div className="nav-favorites">
                <img className="icon" src={window.heart_icon_g} />
                <Link to="/favorites">Favorites</Link>
              </div>
              <div className="nav-logout">
                <img id="logout-icon" className="icon" src={window.logout_icon} />
                <button onClick={ props.logout }>Logout</button>
              </div>
            </div>
          </div>
        </div>
    );
  } else {
      return(
        <div className={`nav-bar ${navColor}`}>
          <h1><Link to="/">beerpal</Link></h1>
          <div className="loggedOut-nav">
            <button className={`${navColor}`} onClick={ props.demoSignIn } >
              Demo Log In
            </button>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="dropdown loggedOut-nav-mobile">
            <button className="dropbtn">
              <img className="menu-icon icon" src={window.menu_icon} />
              <p>Menu</p>
            </button>
            <div className="dropdown-content">
              <div className="demo-sign-in">
                <button onClick={ props.demoSignIn } >
                  Demo Log In
                </button>
              </div>
              <div className="dropdown-login">
                <Link to="/login">Log In</Link>
              </div>
              <div className="dropdown-signup">
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
};

export default Greeting;
