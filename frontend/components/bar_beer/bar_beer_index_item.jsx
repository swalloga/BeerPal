import React from 'react';
const BarBeerIndexItem = (props) => {
  let beerPic;
  switch (props.barBeer.beer.image_url) {
    case "guiness.png":
      beerPic = window.guiness_img;
      break;
    case "corona.jpg":
      beerPic = window.corona_img;
      break;
    case "stella.png":
      beerPic = window.stella_img;
      break;
    case "bluemoon.jpg":
      beerPic = window.bluemoon_img;
      break;
    default:
      beerPic = window.beer_icon;
  }
  return (
    <li className="barBeerIndexListItem">
      <div className="fadeBox">
        <div id="hover-detail">
          <img className="heart-icon-o" src={window.heart_icon_o} />
          <h3>
            Deal details here
          </h3>
          <h4>
            Average ratings...
          </h4>
          <p>Form to reserve</p>
        </div>
      </div>
      <div className="barBeerIndexItem">
        <div className="barBeerIndexHeader">
          <p>
            Happy Hour
          </p>
          <img className="heart-icon" src={window.heart_icon} />
        </div>
        <img className="beer-img" src={beerPic} />
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
