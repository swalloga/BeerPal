import React from 'react';
import CityDropdownContainer from './city_dropdown_container';
import { withRouter } from 'react-router-dom';

export const FilterBar = (props) => {

  return(
    <div className="filter-bar">
      <div className="city-filter">
        <CityDropdownContainer />
      </div>
      <div className="beer-search">
        <form className="search-form">
          <input type="text" placeholder="search by beer"></input>
            <button>O</button>
        </form>
      </div>
      <div className="bar-search">
        <form className="search-form">
          <input type="text" placeholder="search by bar"></input>
            <button>O</button>
        </form>
      </div>
    </div>
  );
};

export default FilterBar;
