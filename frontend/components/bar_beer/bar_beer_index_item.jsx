import React from 'react';
// TODO: come back and fill this out
const BarBeerIndexItem = (props) => {

  // the problem is here
  return (
    <li className="barBeerIndexListItem">
      <div className="fadeBox">
        Content about deal!
      </div>
      <div className="barBeerIndexItem">
        <div className="barBeerIndexHeader">
          <p>
            Happy Hour
          </p>
          <img className="heart-icon" src={window.heart_icon} />
        </div>
        <img className="beer-img" src={window.guiness_img} />
        <p className="beer-description">
          {props.barBeer.beer.name},  {props.barBeer.beer.description},  {props.barBeer.beer.abv}%
        </p>
        <p className="barName">
          {props.barBeer.bar.name}
        </p>
        <p className="barAddress">
          {props.barBeer.bar.address}
        </p>
      </div>
    </li>
);
};

export default BarBeerIndexItem;
