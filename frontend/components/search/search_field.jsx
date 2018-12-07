import React from 'react';
import { Route } from 'react-router-dom';

class SearchFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleBeerSubmit = this.handleBeerSubmit.bind(this);
    this.handleBeerKeyPress = this.handleBeerKeyPress.bind(this);
    this.handleBarSubmit = this.handleBarSubmit.bind(this);
    this.handleBarKeyPress = this.handleBarKeyPress.bind(this);
    this.state = { beerStr: "", barStr:"" };
  }

  handleBeerSubmit() {
    const beerName = this.state.beerStr;
    const cityId = this.props.cityId;
    if (beerName.length === 0) {
      this.props.fetchDeals(cityId);
    } else {
      this.props.fetchDealsByBeerSearch(beerName, cityId);
    }
  }

  handleBeerKeyPress(e) {
    e.preventDefault();
    this.setState({ beerStr: e.target.value });
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.timeout = setTimeout(() => {
      this.handleBeerSubmit();
      clearTimeout(this.timeout);
    }, 350);
  }

  handleBarSubmit() {
    const barName = this.state.barStr;
    const cityId = this.props.cityId;
    if (barName.length === 0) {
      this.props.fetchDeals(cityId);
    } else {
      this.props.fetchDealsByBarSearch(barName, cityId);
    }
  }

  handleBarKeyPress(e) {
    e.preventDefault();
    this.setState({ barStr: e.target.value });
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.timeout = setTimeout(() => {
      this.handleBarSubmit();
      clearTimeout(this.timeout);
    }, 350);
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
              value={this.state.beerStr}
              onChange={this.handleBeerKeyPress}
              ></input>
          </form>
        </div>
        <div className="bar-search">
          <form className="search-form">
            <input
              type="text"
              className="bar-search-field"
              placeholder="search by bar"
              value={this.state.barStr}
              onChange={this.handleBarKeyPress}
              ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchFieldComponent;
