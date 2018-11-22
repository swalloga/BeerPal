import React from 'react';

const ReservationIndexItem = (props) => {
  const bar = props.bar || {name:"" ,address:""};
  const beer = props.beer || {name:"" ,description:"", abv:""};

  return (
    <li className="ReservationIndexListItem">
      <div className="ReservationIndexItem">
        <div className="ReservationIndexHeader">
          <p>
            Happy Hour
          </p>
        </div>
        <p className="beer-description">
          {beer.name},  {beer.description},  {beer.abv}%
        </p>
        <p className="barName">
          {bar.name}
        </p>
        <p className="barAddress">
          {bar.address}
        </p>
        <div className="delete-reservation">
          <button onClick={() => props.deleteReservation(props.reservation.id)}>Cancel Reservation</button>
        </div>
      </div>
    </li>
  );
};

export default ReservationIndexItem;
