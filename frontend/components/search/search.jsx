import React from 'react';
import FilterBar from './filter';
import DealIndexContainer from '../deal/deal_index_container';
import BarMapContainer from '../map/map_container';

const Search = (props) => {
  const d = new Date();
  const weekday = new Array(7);
  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const n = weekday[d.getDay()];

  return (
    <div className="browse-pane">
      <div className="weekday-container">
        <span className="weekday">{n}</span>
      </div>
      <div className="filter-wrapper">
        <FilterBar />
      </div>
      <div className="user-pane">
        <div className="deal-side">
          <DealIndexContainer />
        </div>
        <div className="map-side">
          <BarMapContainer />
        </div>
      </div>
    </div>
  );
}

export default Search;
