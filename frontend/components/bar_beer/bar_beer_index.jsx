import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BarBeerIndexItem from './bar_beer_index_item';

class BarBeerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBarBeers();
  }

  render() {
    const barBeers= Object.values(this.props.barBeers);
    if (barBeers.length === 0) {
      return (<h4>hold up... wait</h4>);
    } else {
      return (
      <section className="barBeerIndex">
        <ul>
          {barBeers.map(
            barBeer => <BarBeerIndexItem key={barBeer.id} barBeer={barBeer} />
        )}
      </ul>
    </section>
    );
  }
  }
}

export default BarBeerIndex;
