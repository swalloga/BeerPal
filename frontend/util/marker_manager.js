class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
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

    marker.addListener('mouseover', () => this.handleHoverOn(marker));
    marker.addListener('mouseout', () => this.handleHoverOff(marker));
    this.markers[marker.dealId] = marker;
  }

  handleHoverOn(marker) {
    let fadeboxId = `fade-${marker.dealId.toString()}`;
    document.getElementById(marker.dealId).style.display = "none";
    document.getElementById(fadeboxId).style.display = "block";
  }

  handleHoverOff(marker) {
    let fadeboxId = `fade-${marker.dealId.toString()}`;
    document.getElementById(marker.dealId).style.display = "block";
    document.getElementById(fadeboxId).style.display = "none";
  }

  removeMarker(marker) {
    this.markers[marker.dealId].setMap(null);
    delete this.markers[marker.dealId];
  }
}

export default MarkerManager;
