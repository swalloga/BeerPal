import React from 'react';
// TODO: come back and fill this out
const BarBeerIndexItem = (props) => {

  // the problem is here
  return (
    <li className="barBeerIndexListItem">
      <div className="barBeerIndexItem">
        {props.barBeer.beer.name}
        <br/>
        {props.barBeer.beer.description}
        <br/>
        {props.barBeer.bar.name}
        <br/>
        {props.barBeer.bar.address}
      </div>
    </li>
);
};

export default BarBeerIndexItem;
