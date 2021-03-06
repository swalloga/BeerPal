import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import MapContainer from '../map/map_container';
import CityDropdownContainer from '../search/city_dropdown_container';
import SpotlightCarousel from './spotlight_content_container';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    this.props.updateTempEmail(this.state.email);
  }

  render(){
    const inviteForm = (
      <form className="invite-form">
        <input type="text"
          placeholder="your email"
          value={this.state.email}
          onChange={this.update('email')}/>
        <div>
          <input type="text" placeholder="zip code"/>
          <Link to="/signup">
            <button type="submit" onClick={this.handleSubmit}>Browse Bars</button>
          </Link>
        </div>
      </form>
    );

    return(
      <div className="content">
        <div className="main-content-invite">
          <div className="invite">
            <h2>HAPPY HOUR BEERS, FOR $5</h2>
            <h3>Find a happy hour near you</h3>
            {inviteForm}
          </div>
        </div>
        <h4>
          <span className="section-title">How beerPal works:</span>
        </h4>
        <div className="main-info">
          <div className="column1">
            <img className="choose-icon icon" src={window.pin_icon} />
            <h4 className="column-text">Choose</h4>
            <p className="column-text">Over 1000 local bars offering happy hour specials.</p>
          </div>
          <br/>
          <div className="column2">
            <img className="showup-icon icon" src={window.bar_icon}/>
            <h4 className="column-text">Show up</h4>
            <p className="column-text">
              Skip the line–BeerPal covers the cost of beers.
            </p>
          </div>
          <br/>
          <div className="column3">
            <img className="drink-icon icon" src={window.beer_icon}/>
            <h4 className="column-text">Pop bottles(or draft)!</h4>
            <p className="column-text">Enjoy your favorite beers, everyday.</p>
          </div>
        </div>
        <div className="robot-info">
          <img className="robot-orange icon" src={window.orangerobot_img} />
          <div className="robot-text">
            <h3 className="robot-pal">HI, I’M PAL, YOUR BEER BUDDY</h3>
            <p>
              I’ll learn your preferences and make happy hour the best time of your day!
            </p>
          </div>
        </div>
        <div className="map-container">
          <span className="section-title">Bubbly and Delicious.</span>
          <div className="map-column">
            <div className="map-location">
              <p>I'm in: </p>
              <br/>
              <div className="city-selector">
                <CityDropdownContainer />
            </div>
          </div>
          <div className="map">
            <MapContainer />
          </div>
        </div>
      </div>
      <div className="spotlight-content">
            <div className="spotlight-detail">
              <SpotlightCarousel />
            </div>
      </div>
      <div className="bottom-invite">
        <div className="bottom-invite-form">{inviteForm}</div>
        <img className="robot-img icon" src={window.bluerobot_img} />
      </div>
    </div>
    );
  }
}

export default MainContent;
