import React from 'react';
import { withRouter } from 'react-router-dom';

class MainContent extends React.Component {

  render() {
    return(
      <div className="content">
        <div className="main-content-invite">Main content invite goes here</div>
        <h4>How beerPal works:</h4>
        <div className="main-info">
          <br/>
          <div className="column1">Choose</div>
          <br/>
          <div className="column2">Show up</div>
          <br/>
          <div className="column2">Pop bottles(or draft)</div>
        </div>
        <div className="robot-info">they have a robot that learns preferences... will i??</div>
        <div className="map-container">brows the map for bars here
          <div className="map_column">
            <div className="section-title">Find a happy hour!</div>
            <div className="map-location">I'm in
              <div className="city-selector">[New York!]</div>
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

export default withRouter(MainContent);
