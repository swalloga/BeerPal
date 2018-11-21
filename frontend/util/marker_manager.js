class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(deals){
    const dealesObj = {};
    deals.forEach(deal => dealesObj[deal.id] = deal);

    deals
      .filter(deal => !this.markers[deal.id])
      .forEach(newdeal => this.createMarkerFromdeal(newdeal, this.handleClick));

    Object.keys(this.markers)
      .filter(dealId => !dealesObj[dealId])
      .forEach((dealId) => this.removeMarker(this.markers[dealId]));
  }

  createMarkerFromdeal(deal) {
    const position = new google.maps.LatLng(deal.latitude, deal.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
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
