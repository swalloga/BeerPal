import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BarBeerIndexItem from './bar_beer_index_item';

class BarBeerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO:
    // fetch bar beers by Date
    // pass in relevant date here with date- default to seed data
    this.props.fetchAllBarBeers();
    // this.props.fetchBarBeersByDate();
  }

  render() {
    const barBeers= Object.values(this.props.barBeers);
    let bar, beer;
    if (barBeers.length === 0) {
      return (<div></div>);
    } else {
      return (
      <section className="barBeerIndex">
        <ul className="barBeerIndexList">
          {barBeers.map(
            barBeer => <BarBeerIndexItem key={barBeer.id} barBeer={barBeer.barBeer}
            bar = {barBeer.bar}
            beer = {barBeer.beer} />
        )}
      </ul>
    </section>
    );
  }
  }
}

export default BarBeerIndex;
