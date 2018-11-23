import React from 'react';

const ReservationIndexItem = (props) => {
  const bar = props.bar || {name:"" ,address:""};
  const beer = props.beer || {name:"" ,description:"", abv:""};
  const currentDate = new Date(props.reservations[props.reservationForToday].date);
  let resDate = (props.reservation === null) ? null : new Date(props.reservation.date);
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
    case "heineken.jpg":
      beerPic = window.heineken_img;
      break;
    case "brooklyn.jpg":
      beerPic = window.brooklyn_img;
      break;
    default:
      beerPic = window.beer_icon;
    }
  if (resDate < currentDate) {
    resDate = resDate.toDateString();
    return (
      <li className="ReservationIndexListItem">
        <div className="ReservationIndexItem">
          <div className="res-header">
            <p className="date">{resDate}</p>
          </div>
          <div className="reservation-info">
            <img className="beer-img-res" src={beerPic} />
            <div className="res-detail">
              <p className="beer-description">
                {beer.name},  {beer.description},  {beer.abv}%
              </p>
              <p className="barName">{bar.name}</p>
              <p className="barAddress">{bar.address}</p>
            </div>
          </div>
        </div>
      </li>
    );
  } else {
    resDate = resDate.toDateString();
    return (
      <li className="ReservationIndexListItem">
        <div className="ReservationIndexItem">
          <div className="res-header">
            <p className="date">{resDate}</p>
          </div>
          <div className="reservation-info">
            <img className="beer-img-res" src={beerPic} />
            <div className="res-detail">
              <p className="beer-description">
                {beer.name},  {beer.description},  {beer.abv}%
              </p>
              <p className="barName">{bar.name}</p>
              <p className="barAddress">{bar.address}</p>
            </div>
            <div className="delete-reservation">
              <button onClick={() => props.deleteReservation(props.reservation.id)}>Cancel Reservation</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
};

export default ReservationIndexItem;
