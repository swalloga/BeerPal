import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DealIndexItem from './deal_index_item';

class DealIndex extends React.Component {
  constructor(props) {
    super(props);
  }
// null date is placeholder
  componentDidMount() {
    this.props.fetchAllCities();
    let cityId = this.props.currentCityId;
    this.props.fetchDeals(cityId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCityId !== this.props.currentCityId) {
      let cityId = this.props.currentCityId;
      this.props.fetchDeals(cityId);
    }
  }

  render() {
    const deals= Object.values(this.props.deals);
    let bar, beer;
    if (deals.length === 0) {
      return (<div></div>);
    } else {
      return (
      <section className="DealIndex">
        <ul className="DealIndexList">
          {deals.map(
            deal => <DealIndexItem key={deal.id} deal={deal}
            bar = {this.props.bars[deal.bar_id]}
            beer = {this.props.beers[deal.beer_id]}
            createReservation = {this.props.createReservation}
            deleteReservation = {this.props.deleteReservation}
             />
            )}
          </ul>
        </section>
      );
    }
  }
}

export default DealIndex;
