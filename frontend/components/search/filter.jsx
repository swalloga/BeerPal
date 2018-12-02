import React from 'react';
import CityDropdownContainer from './city_dropdown_container';
import SearchFieldContainer from './search_field_container';

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
