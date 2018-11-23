import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
  }
// QUESTION: the delete reservation button doesnt work because its only looking at the reservations that are currently loaded into state. How to fix this?
// <div className="delete-reservation">
//   <button onClick={() => this.props.deleteReservation(currentRes.id)}>Cancel Reservation</button>
// </div>
  render(){
    const reservations = this.props.reservations || [];
    const currentRes = reservations.filter((res) => res[bar_beer_id] === this.props.deal.id);
    const buttonVal = "Reserve";
    // if (this.props.deal.id === this.props.reservations[this.props.reservationForToday]) {
    //   buttonVal = "Cancel";
    // }

    return(
      <div className="reservation-modal">
        <div className="create-reservation">
          <button onClick={() => this.props.createReservation({bar_beer_id: this.props.deal.id})}>Reserve</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ReservationForm);
