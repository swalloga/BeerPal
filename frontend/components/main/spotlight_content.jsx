import React from 'react';
import { sampleSize } from 'lodash';
import { withRouter } from 'react-router-dom';

let slideIndex = 0;
class SpotlightCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.spotlightDeals = [];
    this.interval;
    this.initialRender = true;
  }

  componentDidUpdate(prevProps) {
    if (Object.values(this.props.deals).length === 0) {
      this.spotlightDeals = [];
    } else if(this.spotlightDeals.length > 0 && this.spotlightDeals.length < 3) {
      this.spotlightDeals[0].style.display = "flex";
    } else if (this.spotlightDeals.length > 3){
      this.rotateSpotlight();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  rotateSpotlight() {
    let i;
    let spotlightItems = document.getElementsByClassName("carousel-item");
    for (i = 0; i < spotlightItems.length; i++) {
      spotlightItems[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > spotlightItems.length) {slideIndex = 1;}
    spotlightItems[slideIndex-1].style.display = "flex";
    this.interval = setInterval(this.rotateSpotlight, 4000);
  }

  render() {
    if (this.initialRender || Object.values(this.props.deals).length === 0) {
      this.initialRender = false;
      return (
        <div>
          <li
            id={`spotlight-0`}
            className="carousel-item"
            >
            <div className="spotlight-header">
              <img id="spotlight-robot" className="robot-orange icon" src={window.orangerobot_img} />
              <div className="spotlight-top-info">
                <h3>Coming soon!</h3>
              </div>
            </div>
            <br/>
            <img className="carousel-image" src={window.beer_icon} />
          </li>
        </div>);
    } else {
      let deals = this.props.deals;
      let bars = this.props.bars;
      let beers = this.props.beers;
      if (Object.values(deals).length > 0 && Object.values(deals).length < 3) {
        this.spotlightDeals = _.sampleSize(Object.values(deals));
      } else {
        this.spotlightDeals = _.sampleSize(Object.values(deals), 4);
      }
      let spotlightElements = this.spotlightDeals.map( (deal, idx) => {
        const bar = bars[deal.bar_id];
        const beer = beers[deal.beer_id];
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
        return (
          <li
            id={`spotlight-${idx}`}
            className="carousel-item"
            >
            <div className="spotlight-header">
              <img id="spotlight-robot" className="robot-orange icon" src={window.orangerobot_img} />
              <div className="spotlight-top-info">
                <h3>{beer.name}</h3>
                <h4>{bar.name}</h4>
              </div>
            </div>
            <br/>
            <img className="carousel-image" src={beerPic} />
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
