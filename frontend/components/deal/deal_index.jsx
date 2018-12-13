import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import DealIndexItem from './deal_index_item';

class DealIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCities();
    let cityId = this.props.currentCityId;
    this.props.fetchDeals(cityId);
    this.props.fetchFavorites();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCityId !== this.props.currentCityId) {
      let cityId = this.props.currentCityId;
      this.props.fetchDeals(cityId);
    }
  }

  render() {
    const deals= Object.values(this.props.deals);
    const errors = Object.values(this.props.errors.reservation);
    let bar, beer;
    if (deals.length === 0) {
      return (<div className="no-result-message">No results found.</div>);
    } else {
      return (
      <section className="DealIndex">
        <ul>{errors.map((error, i) =>
            <li
            key={i}
            className="res-error"
            >{error}
            <Link className="res-error-link" to={'/my-account'}>here.</Link>
        </li>)}
          </ul>
        <ul className="DealIndexList">
          {deals.map(
            deal => <DealIndexItem
            key={deal.id}
            deal={deal}
            bar = {this.props.bars[deal.bar_id]}
            beer = {this.props.beers[deal.beer_id]}
            createReservation = {this.props.createReservation}
            deleteReservation = {this.props.deleteReservation}
            reservations = {this.props.reservations}
            reservationForToday = {this.props.reservationForToday}
            createFavorite = {this.props.createFavorite}
            deleteFavorite = {this.props.deleteFavorite}
            favorites = {this.props.favorites}
             />
            )}
          </ul>
        </section>
      );
    }
  }
}

export default DealIndex;
