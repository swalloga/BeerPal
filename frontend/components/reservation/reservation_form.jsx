import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const reservations = this.props.reservations || [];
    // const currentRes = Object.values(reservations).filter((res) => res[bar_beer_id] === this.props.deal.id);

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
