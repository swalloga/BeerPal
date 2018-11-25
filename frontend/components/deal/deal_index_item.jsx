import React from 'react';
import ReservationForm from '../reservation/reservation_form';
// import CancelationForm from '../reservation/cancelation_form';

const DealIndexItem = (props) => {
  const bar = props.bar || {name:"" ,address:""};
  const beer = props.beer || {name:"" ,description:"", abv:""};
  let beerPic;
  switch (beer.image_url) {
    case "guinness.png":
      beerPic = window.guinness_img;
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
    case "heineken.jpg":
      beerPic = window.heineken_img;
      break;
    case "brooklyn.jpg":
      beerPic = window.brooklyn_img;
      break;
    default:
      beerPic = window.beer_icon;
  }

  if (props.reservationForToday === null) {
    return (
      <li className="DealIndexListItem">
        <div className="fadeBox">
          <div id="hover-detail">
            <img className="heart-icon-o" src={window.heart_icon_o} />
            <div className="deal-details">
              <div className="deal-beer-name">{beer.name}</div>
              <div className="deal-beer-description">{beer.description},  {beer.abv}%</div>
            </div>
            <div className="bar-details">
              <div className="bar-name">{bar.name}</div>
              <div className="bar-description">{bar.address}</div>
            </div>
            <ReservationForm
              deal={props.deal}
              createReservation={props.createReservation}
              deleteReservation={props.deleteReservation}
              reservations={props.reservations}
              reservationForToday={props.reservationForToday}
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
  } else {
    return (
      <li className="DealIndexListItem">
      <div className="fadeBox">
        <div id="hover-detail">
          <img className="heart-icon-o" src={window.heart_icon_o} />
          <div className="deal-details">
            <div className="deal-beer-name">{beer.name}</div>
            <div className="deal-beer-description">{beer.description},  {beer.abv}%</div>
          </div>
          <div className="bar-details">
            <div className="bar-name">{bar.name}</div>
            <div className="bar-description">{bar.address}</div>
          </div>
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
  }
};

export default DealIndexItem;
