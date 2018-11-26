import React from 'react';
import { Route } from 'react-router-dom';

class SearchFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleBeerSubmit = this.handleBeerSubmit.bind(this);
    this.handleBeerKeyPress = this.handleBeerKeyPress.bind(this);
    this.handleBarSubmit = this.handleBarSubmit.bind(this);
    this.handleBarKeyPress = this.handleBarKeyPress.bind(this);
  }

  handleBeerSubmit(e) {
    e.preventDefault();
    const beerName = e.currentTarget.value;
    const cityId = this.props.cityId;
    if (beerName.length === 0) {
      this.props.fetchDeals(cityId);
    } else {
      this.props.fetchDealsByBeerSearch(beerName, cityId);
    }
  }

  handleBeerKeyPress(e) {
    if (e.key === "Enter"){
      this.handleBeerSubmit(e);
    }
  }

  handleBarSubmit(e) {
    e.preventDefault();
    const barName = e.currentTarget.value;
    const cityId = this.props.cityId;
    if (barName.length === 0) {
      this.props.fetchDeals(cityId);
    } else {
      this.props.fetchDealsByBarSearch(barName, cityId);
    }
  }

  handleBarKeyPress(e) {
    if (e.key === "Enter"){
      this.handleBarSubmit(e);
    }
  }

  render(){
    return(
      <div className="search-fields">
        <div className="beer-search">
          <form className="search-form">
            <input
              type="text"
              className="beer-search-field"
              placeholder="search by beer"
              onKeyPress={this.handleBeerKeyPress}
              ></input>
          </form>
        </div>
        <div className="bar-search">
          <form className="search-form">
            <input
              type="text"
              className="bar-search-field"
              placeholder="search by bar"
              onKeyPress={this.handleBarKeyPress}
              ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchFieldComponent;
