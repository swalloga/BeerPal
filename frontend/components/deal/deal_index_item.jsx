import React from 'react';
import ReservationForm from '../reservation/reservation_form';

const DealIndexItem = (props) => {
  const bar = props.bar || {name:"" ,address:""};
  const beer = props.beer || {name:"" ,description:"", abv:""};
  let beerPic;
  switch (beer.image_url) {
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
    <li className="DealIndexListItem">
      <div className="fadeBox">
        <div id="hover-detail">
          <img className="heart-icon-o" src={window.heart_icon_o} />
          <div className="deal-beer-name">{beer.name}</div>
          <div className="deal-beer-description">{beer.description},  {beer.abv}%</div>
          <ReservationForm
            deal={props.deal}
            createReservation={props.createReservation}
            deleteReservation={props.deleteReservation}
            reservations={props.reservations}
             />
        </div>
      </div>
      <div className="DealIndexItem">
        <div className="DealIndexHeader">
          <p>
            Happy Hour
          </p>
          <img className="heart-icon" src={window.heart_icon} />
        </div>
        <img className="beer-img" src={beerPic} />
        <p className="beer-description">
          {beer.name},  {beer.description},  {beer.abv}%
        </p>
        <p className="barName">
          {bar.name}
        </p>
        <p className="barAddress">
          {bar.address}
        </p>
      </div>
    </li>
  );
};

export default DealIndexItem;