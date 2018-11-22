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
      zoom: 13
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCityId !== this.props.currentCityId) {
      this.initMap();
    } else if (prevProps.deals !== this.props.deals) {
      this.MarkerManager.updateMarkers(this.props.deals, this.props.bars);
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
