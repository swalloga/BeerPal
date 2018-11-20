import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DealIndexItem from './deal_index_item';

class DealIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCities();
    let date = '1-1-2019';
    let cityId = this.props.currentCityId;
    this.props.fetchDeals(date, cityId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCityId !== this.props.currentCityId) {
      let date = '1-1-2019';
      let cityId = this.props.currentCityId;
      this.props.fetchDeals(date, cityId);
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
             />
            )}
          </ul>
        </section>
      );
    }
  }
}

export default DealIndex;
