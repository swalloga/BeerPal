import React from 'react';
import { Route } from 'react-router-dom';
import ReservationIndexItem from './reservation_index_item';
import ReservationForm from './reservation_form';

class ReservationIndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations();
  }

  render() {
    const reservations = Object.values(this.props.reservations);
    return(
      <div className="my-account-page">
        <div className="my-account-info">
          <h3 id="my-res-header">
            My Account Info
          </h3>
          <div className="my-account-details">
            <p id="name-info">Name:</p>
            <p id="beersleft-info"># of beers left:</p>
            <p id="plan-info">Pick up another six pack.</p>
          </div>
        </div>

        <div className="my-reservations">
          <h3 id="my-res-header">
            My Happy Hours
          </h3>
          <ul className="happy-hour-list">
            {reservations.map(
              reservation => <ReservationIndexItem key={reservation.id}
              reservation = {reservation}
              bar = {this.props.bars[reservation.bar_id]}
              beer = {this.props.beers[reservation.beer_id]}
              deleteReservation = {this.props.deleteReservation}
              reservations = {this.props.reservations}
              reservationForToday = {this.props.reservationForToday}
              />
            )}
          </ul>
      </div>
    </div>
    );
  }
}

export default ReservationIndexComponent;
