import React from 'react';
import ReservationForm from '../reservation/reservation_form';

class DealIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bar = this.props.bar || {name:"" ,address:"", id:null };
    const beer = this.props.beer || {name:"" ,description:"", abv:""};
    let favBarIds = [];
    let favorites = Object.values(this.props.favorites);

    favorites.map((fav) => {
      favBarIds.push(fav.bar_id);
    });
    const heartIcon = favBarIds.some((bar_id) => bar_id === bar.id) ? window.heart_icon_f : window.heart_icon_o;
    const whiteHeart = favBarIds.some((bar_id) => bar_id === bar.id) ? window.heart_icon_fw : window.heart_icon;
    let heartAction, currentFav;
    if (favorites.length > 0) {
      currentFav = favorites.find((fav) => { return fav.bar_id === bar.id;});
    }
    if (currentFav) {
        heartAction = () => this.props.deleteFavorite(currentFav.id);
      } else {
      heartAction = () => this.props.createFavorite({bar_id: bar.id});
    }

    let beerPic;
    switch (beer.image_url) {
      case "guinness.png":
      beerPic = window.guinness_img;
      break;
      case "corona.jpg":
      beerPic = window.corona_img;
      break;
      case "stella.png":
      beerPic = window.stella_img;
      break;
      case "bluemoon.jpg":
      beerPic = window.bluemoon_img;
      break;
      case "heineken.jpg":
      beerPic = window.heineken_img;
      break;
      case "brooklyn.jpg":
      beerPic = window.brooklyn_img;
      break;
      default:
      beerPic = window.beer_icon;
    }

    if (this.props.reservationForToday === null) {
      return (
        <li className="DealIndexListItem">
          <div id={`fade-${this.props.deal.id.toString()}`} className="fadeBox">
            <div id="hover-detail">
              <button className="fav-button" onClick={heartAction}>
                <img className="heart-icon-o" src={heartIcon} />
              </button>
              <div className="deal-details">
                <div className="deal-beer-name">{beer.name}</div>
                <div className="deal-beer-description">{beer.description},  {beer.abv}%</div>
              </div>
              <div className="bar-details">
                <div className="bar-name">{bar.name}</div>
                <div className="bar-description">{bar.address}</div>
              </div>
              <ReservationForm
                deal={this.props.deal}
                createReservation={this.props.createReservation}
                deleteReservation={this.props.deleteReservation}
                reservations={this.props.reservations}
                reservationForToday={this.props.reservationForToday}
                />
            </div>
          </div>
          <div id={this.props.deal.id} className="DealIndexItem">
            <div className="DealIndexHeader">
              <p>
                Happy Hour
              </p>
              <img className="heart-icon" src={whiteHeart} />
            </div>
            <img className="beer-img" src={beerPic} />
            <p className="beer-description">
              {beer.name},  {beer.description},  {beer.abv}%
            </p>
            <p className="barName">
              {bar.name}
            </p>
            <p className="barAddress">
              {bar.address}
            </p>
          </div>
        </li>
      );
    } else {
      return (
        <li className="DealIndexListItem">
          <div id={`fade-${this.props.deal.id.toString()}`} className="fadeBox">
            <div id="hover-detail">
              <img className="heart-icon-o" src={heartIcon} />
              <div className="deal-details">
                <div className="deal-beer-name">{beer.name}</div>
                <div className="deal-beer-description">{beer.description},  {beer.abv}%</div>
              </div>
              <div className="bar-details">
                <div className="bar-name">{bar.name}</div>
                <div className="bar-description">{bar.address}</div>
              </div>
            </div>
          </div>
          <div id={this.props.deal.id} className="DealIndexItem">
            <div className="DealIndexHeader">
              <p>
                Happy Hour
              </p>
              <img className="heart-icon" src={whiteHeart} />
            </div>
            <img className="beer-img" src={beerPic} />
            <p className="beer-description">
              {beer.name},  {beer.description},  {beer.abv}%
            </p>
            <p className="barName">
              {bar.name}
            </p>
            <p className="barAddress">
              {bar.address}
            </p>
          </div>
        </li>
      );
    }
  }
}

export default DealIndexItem;
