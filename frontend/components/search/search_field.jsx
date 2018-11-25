import React from 'react';
import { Route } from 'react-router-dom';

class SearchFieldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const beerName = e.currentTarget.value;
    const cityId = this.props.cityId;
    if (beerName.length === 0) {
      this.props.fetchDeals(cityId);
    } else {
      this.props.fetchDealsByBeerSearch(beerName, cityId);
    }
  }

  handleKeyPress(e) {
    if (e.key === "Enter"){
      this.handleSubmit(e);
    }
  }

  render(){
    return(
      <form className="search-form">
        <input
          type="text"
          className="beer-search-field"
          placeholder="search by beer!"
          onKeyPress={this.handleKeyPress}
          ></input>
      </form>
    );
  }
}

export default SearchFieldComponent;
