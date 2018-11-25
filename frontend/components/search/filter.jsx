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
      <div className="beer-search">
        <SearchFieldContainer />
      </div>
      <div className="bar-search">
        <form className="search-form">
          <input
            type="text"
            className="bar-search-field"
            placeholder="search by bar"
            ></input>
        </form>
      </div>
    </div>
  );
};

export default FilterBar;
// <button><img className="mag-icon" src={window.mag_icon} /></button>
