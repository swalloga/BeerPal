import React from 'react';
import { withRouter } from 'react-router-dom';

export const FilterBar = (props) => {
  return(
    <div className="filter-bar">
      <button className="city-filter">City filter</button>
    </div>
  );
};

export default FilterBar;
