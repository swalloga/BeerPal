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
        <div className="my-reservations">
          <h3>
            Upcoming Happy Hours
          </h3>
          <ul className="happy-hour-list">
            {reservations.map(
              reservation => <ReservationIndexItem key={reservation.id}
              reservation = {reservation}
              bar = {this.props.bars[reservation.bar_id]}
              beer = {this.props.beers[reservation.beer_id]}
              deleteReservation = {this.props.deleteReservation}
              />
          )}
        </ul>
      </div>
      <div className="reservation-history">
        <h3>
          Past Happy Hours
        </h3>
      </div>
    </div>
    );
  }
}

export default ReservationIndexComponent;
