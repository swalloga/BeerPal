import React from 'react';
import CityDropdownContainer from './city_dropdown_container';
import { withRouter } from 'react-router-dom';

export const FilterBar = (props) => {
  return(
    <div className="filter-bar">
      <div className="city-filter">
        <CityDropdownContainer />
      </div>
    </div>
  );
};

export default FilterBar;
