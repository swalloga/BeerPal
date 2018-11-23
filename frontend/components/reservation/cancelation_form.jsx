// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
//
// class CancelationForm extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render(){
//     const reservations = this.props.reservations || [];
//     const currentRes = Object.values(reservations).filter((res) => res[bar_beer_id] === this.props.deal.id);
//
//     return(
//       <div className="reservation-modal">
//         <div className="delete-reservation">
//           <button onClick={() => this.props.deleteReservation(currentRes.id)}>Cancel Reservation</button>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default withRouter(CancelationForm);
