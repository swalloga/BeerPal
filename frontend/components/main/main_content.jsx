import React from 'react';
import { withRouter } from 'react-router-dom';

class MainContent extends React.Component {

  render() {
    return(
      <div className="content">
        <div className="main-content-invite">Main content invite goes here</div>
        <h4>
          <span className="section-title">How beerPal works:</span>
        </h4>
        <div className="main-info">
          <br/>
          <div className="column1">Choose</div>
          <br/>
          <div className="column2">Show up</div>
          <br/>
          <div className="column2">Pop bottles(or draft)</div>
        </div>
        <div className="robot-info">they have a robot that learns preferences... will i??</div>
        <div className="map-container">
          <span className="section-title">Bubbly and Delicious.</span>
          <div className="map-column">
            <div className="map-location">
              <span>I'm in:</span>
              <span className="city-selector">[  New York!  ]</span>
            </div>
            <div className="map">map view!</div>
          </div>
        </div>
        <div className="spotlight-content">rotating content</div>
        <div className="plans-container">How many six packs??</div>
        <div className="bottom-invite">Please sign up, please please</div>
      </div>

    );
  }
}

export default MainContent;
