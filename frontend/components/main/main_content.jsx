import React from 'react';
import { withRouter } from 'react-router-dom';

const MainContent = props => {
  const inviteForm = (
    <form className="invite-form">
      <input type="text" placeholder="your email"></input>
      <div>
        <input type="text" placeholder="zip code"></input>
        <button>Browse Bars</button>
      </div>
    </form>
  );
    return(
      <div className="content">
        <div className="main-content-invite">
          <div className="invite">
            <h2>HAPPY HOUR BEERS, FOR $5</h2>
            <h3>Find a happy hour near you</h3>
            {inviteForm}
          </div>
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
            <p className="column-text">
              Skip the line–BeerPal covers the cost of beers.
            </p>
          </div>
          <br/>
          <div className="column3">
            <img className="drink-icon icon" src={window.beer_icon}/>
            <h4 className="column-text">Pop bottles(or draft)!</h4>
            <p className="column-text">Enjoy your favorite beers, everyday.</p>
          </div>
        </div>
        <div className="robot-info">
          <img className="robot-orange icon" src={window.orangerobot_img} />
          <div className="robot-text">
            <h3 className="robot-pal">HI, I’M PAL, YOUR BEER BUDDY</h3>
            <p>
              I’ll learn your preferences and make happy hour the best time of your day!
            </p>
          </div>
        </div>
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
        <div className="bottom-invite">
          <div className="bottom-invite-form">{inviteForm}</div>
          <img className="robot-img icon" src={window.bluerobot_img} />
        </div>
      </div>
    );
  };

export default MainContent;
