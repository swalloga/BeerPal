class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(deals, bars){
    const dealsArray = Object.values(deals);

    dealsArray
      .filter(deal => !this.markers[deal.id])
      .forEach(newdeal => this.createMarkerFromdeal(newdeal, bars[newdeal.bar_id], this.handleClick));

    Object.keys(this.markers)
      .filter(dealId => !deals[dealId])
      .forEach((dealId) => this.removeMarker(this.markers[dealId]));
  }

  createMarkerFromdeal(deal, bar) {
    const lat = bar.latitude;
    const lon = bar.longitude;
    const position = new google.maps.LatLng(lat, lon);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      dealId: deal.id
    });

    marker.addListener('click', () => this.handleClick(deal));
    this.markers[marker.dealId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.dealId].setMap(null);
    delete this.markers[marker.dealId];
  }
}

export default MarkerManager;
