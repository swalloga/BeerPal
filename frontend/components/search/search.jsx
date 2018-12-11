import React from 'react';
import FilterBar from './filter';
import DealIndexContainer from '../deal/deal_index_container';
import BarMapContainer from '../map/map_container';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.n = weekday[d.getDay()];
  }

  handleMapButtonClick(e) {
    e.preventDefault();
    $('#map-side').toggleClass("hide");
    $('#angle-bracket').toggleClass("hidden");
  }


  render() {
    return (
      <div className="browse-pane">
        <div className="weekday-container">
          <span className="weekday">{this.n}</span>
        </div>
        <div className="filter-wrapper">
          <FilterBar />
        </div>
        <div className="user-pane">
          <div className="deal-side">
            <DealIndexContainer />
          </div>
          <div className="map-hide-div">
            <button
              className="map-hide-button"
              onClick={this.handleMapButtonClick}
              >
              <span><i id="angle-bracket" className="fas fa-angle-right"></i></span>
            </button>
          </div>
          <div id="map-side" className="map-side">
            <BarMapContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
