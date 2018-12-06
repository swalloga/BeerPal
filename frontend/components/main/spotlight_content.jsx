import React from 'react';
import { sampleSize } from 'lodash';

let slideIndex = 0;
class SpotlightCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.spotlightDeals = [];
  }

  componentDidUpdate(prevProps) {
    if(this.spotlightDeals.length > 0 && this.spotlightDeals.length < 3) {
      this.spotlightDeals[0].style.display = "flex";
    } else if (this.spotlightDeals.length > 3){
      this.rotateSpotlight();
    }
  }

  rotateSpotlight() {
    let i;
    let x = document.getElementsByClassName("carousel-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1;}
    x[slideIndex-1].style.display = "flex";
    setInterval(this.rotateSpotlight, 4000);
  }

  render() {
    if (Object.values(this.props.deals).length === 0) {
      return <div></div>;
    } else {
      if (this.props.deals.length > 0 && this.props.deals.length < 3) {
        this.spotlightDeals = _.sampleSize(Object.values(this.props.deals));
      } else {
        this.spotlightDeals = _.sampleSize(Object.values(this.props.deals), 4);
      }
      let spotlightElements = this.spotlightDeals.map( (deal, idx) => {
        const bar = this.props.bars[deal.bar_id];
        const beer = this.props.beers[deal.beer_id];

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
