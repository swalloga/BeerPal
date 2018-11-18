import React from 'react';
import { withRouter } from 'react-router-dom';

const MainContent = props => {
    return(
      <div className="content">
        <div className="main-content-invite">
          <h2>HAPPY HOUR BEERS, FOR $5</h2>
          <br/>
          <h3>Find a happy hour near you</h3>
          <br/>
          <form className="invite-form">
            <input type="text" preload="your email"></input>
            <br/><br/>
            <input type="text" preload="zip code"></input>
            <button>Browse Bars</button>
          </form>
        </div>
        <h4>
          <span className="section-title">How beerPal works:</span>
        </h4>
        <div className="main-info">
          <br/>
          <div className="column1">
            <img className="choose-icon icon" src={window.pin_icon} />
            <h4 className="column-text">Choose</h4>
            <p className="column-text">Over 1000 local bars offering happy hour specials.</p>
          </div>
          <br/>
          <div className="column2">
            <img className="showup-icon icon" src={window.bar_icon}/>
            <h4 className="column-text">Show up</h4>
            <p className="column-text">Skip the line–BeerPal covers the cost of beers.</p>
          </div>
          <br/>
          <div className="column3">
            <img className="drink-icon icon" src={window.beer_icon}/>
            <h4 className="column-text">Pop bottles(or draft)!</h4>
            <p className="column-text">Enjoy your favorite beers, everyday.</p>
          </div>
        </div>
        <div className="robot-info">they have a robot that learns preferences... will i??</div>
        <div className="map-container">
          <span className="section-title">Bubbly and Delicious.</span>
          <div className="map-column">
            <div className="map-location">
              <span>I'm in:</span>
              <span className="city-selector">[  New York!  ]</span>
            </div>
            <p className="map">map view!</p>
          </div>
        </div>
        <div className="spotlight-content">rotating content</div>
        <div className="plans-container">How many six packs??</div>
        <div className="bottom-invite">Please sign up, please please</div>
      </div>
    );
  };

export default MainContent;
