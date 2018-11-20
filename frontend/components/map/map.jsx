import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class BarMap extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    // TODO: UPDATE MAP TO CENTER ON CURRENT CITY
    const mapOptions = {
      center: { lat: 40.7514, lng: -73.9839 }, // this is SF
      zoom: 14
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

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

  render() {
    return(
      <div>
        <div id='map-container' ref='map' >
        </div>
      </div>
    );
  }
}

export default withRouter(BarMap);
