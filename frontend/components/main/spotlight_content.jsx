import React from 'react';
import { sampleSize } from 'lodash';

class SpotlightCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // add logic to handle no deals
    if (Object.values(this.props.deals).length === 0) {
      return <div></div>;
    } else {
      let spotlightDeals;
      if (this.props.deals.length > 0 && this.props.deals.length < 3) {
        spotlightDeals = _.sampleSize(Object.values(this.props.deals));
      } else {
        spotlightDeals = _.sampleSize(Object.values(this.props.deals), 4);
      }
      let spotlightElements = spotlightDeals.map( (deal, idx) => {
        const bar = this.props.bars[deal.bar_id];
        const beer = this.props.beers[deal.beer_id];
        return (
          <li
            id={`spotlight-${idx}`}
            className="carousel-item"
            >
            <h3>{beer.name}</h3>
            <h4>{bar.name}</h4>
            <p>{bar.address}</p>
          </li>
        );
      });
      return (
        <ul className="spotlight-carousel">
          {spotlightElements}
        </ul>
      );
    }
  }
}

export default SpotlightCarousel;
