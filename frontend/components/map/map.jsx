import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class BarMap extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    const mapOptions = {
      center: { lat: this.props.currentCityLat, lng: this.props.currentCityLon },
      zoom: 14
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    // TESTING MARKERS
    let marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: { lat: 40.7514, lng: -73.9839 }
    });

    marker.setMap(this.map);

    marker.addListener('mouseover', toggleBounce);
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  }

  componentDidMount() {
    this.initMap();
  }
// TODO: come back and add markers to the map
  componentDidUpdate(prevProps) {
    if (prevProps.currentCityId !== this.props.currentCityId) {
      this.initMap();
    } else if (prevProps.deals !== this.props.deals) {
      this.MarketManager.updateMarkers(this.props.deals);
    }
  }

  render() {
    return(
      <div className="happyhour-map">
        <div id='map-container' ref='map' >
        </div>
      </div>
    );
  }
}

export default withRouter(BarMap);
