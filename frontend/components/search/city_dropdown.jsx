import React from 'react';

export const CityDropdown = (props) => {
  const cities= Object.values(props.cities);
  return(
    <div className="city-dropdown">
      <div className="city-filter-header">
        Select a City
      </div>
      <ul className="city-filter-list">
        {cities}
      </ul>
    </div>
  );
};

export default CityDropdown;
