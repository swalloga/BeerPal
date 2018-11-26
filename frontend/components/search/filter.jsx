import React from 'react';
import CityDropdownContainer from './city_dropdown_container';
import SearchFieldContainer from './search_field_container';
import { withRouter } from 'react-router-dom';

export const FilterBar = (props) => {

  return(
    <div className="filter-bar">
      <div className="city-filter">
        <CityDropdownContainer />
      </div>
      <div className="search-filters">
        <SearchFieldContainer />
      </div>
    </div>
  );
};

export default FilterBar;
// <button><img className="mag-icon" src={window.mag_icon} /></button>
