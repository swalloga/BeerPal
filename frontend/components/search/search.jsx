import React from 'react';

import FilterBar from './filter';
import DealIndexContainer from '../deal/deal_index_container';
import BarMapContainer from '../map/map_container';


const Search = () => (
  <div className="browse-pane">
    <div className="filter-wrapper">
      <FilterBar />
    </div>
    <div className="user-pane">
      <div className="deal-side">
        <DealIndexContainer />
      </div>
      <div className="map-side">
        <BarMapContainer/>
      </div>
    </div>
  </div>
);

export default Search;
