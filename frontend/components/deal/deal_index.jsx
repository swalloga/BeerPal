import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DealIndexItem from './deal_index_item';

class DealIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO:
    // fetch bar beers by Date
    // pass in relevant date here with date- default to seed data
    this.props.fetchAllDeals();
    // this.props.fetchBarBeersByDate();
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
            city = {deal.city} />
        )}
      </ul>
    </section>
    );
  }
  }
}

export default DealIndex;
