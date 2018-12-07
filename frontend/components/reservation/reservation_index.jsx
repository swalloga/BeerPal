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
    this.props.getCurrentUserInfo(this.props.currentUserId);
  }

  componentDidUpdate(prevProps) {
    let prevReservations = JSON.stringify(Object.keys(prevProps.reservations));
    let currentReservtions = JSON.stringify(Object.keys(this.props.reservations));
    if (prevReservations !== currentReservtions) {
      this.props.getCurrentUserInfo(this.props.currentUserId);
    }
  }

  render() {
    let reservations = Object.values(this.props.reservations);
    let mapped = reservations.map((el, i) => {
      return {index: i, value: el};
    });
    mapped.sort( (a, b) => {
      if (a.value.date < b.value.date) {
        return 1;
      } else if (a.value.date > b.value.date) {
        return -1;
      }
      return 0;
    });
    const sortedReservations = mapped.map( (el) => reservations[el.index]);
    const currentUser = this.props.users[this.props.currentUserId];
    const addSixBeers = () => {
      this.props.updateUser(currentUser, 6);
      $("#undo").toggleClass("hide");
      $("#plan-info").toggleClass("hide");
    };
    const removeSixBeers = () => {
      this.props.updateUser(currentUser, -6);
      $("#undo").toggleClass("hide");
      $("#plan-info").toggleClass("hide");
    };
    return(
      <div className="my-account-page">
        <div className="my-account-info">
          <div className="my-account-details">
            <h4 id="name-info">Hey {currentUser.name}!</h4>
            <p className="beersleft-info">
              You have <span>{currentUser.beer_allowance} beers left </span>on your account.
            </p>
            <div className="plan-update">
              <p className="beersleft-info">Need to pick up another six pack?</p>
              <button className="plan-button" id="plan-info" onClick={addSixBeers}>
                Buy 6 more
              </button>
              <button className="plan-button hide" id="undo" onClick={removeSixBeers}>
                Oops! Undo that, please.
              </button>
            </div>
          </div>
        </div>

        <div className="my-reservations">
          <h3 id="my-res-header">
            My Happy Hours
          </h3>
          <ul className="happy-hour-list">
            {sortedReservations.map(
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
