import React from 'react';
// TODO: come back and fill this out
const BarBeerIndexItem = ({ barBeer }) => {
  // the problem is here
  return ( <li className="barBeerIndexItem">${JSON.stringify(barBeer)}</li>);
};

export default BarBeerIndexItem;
