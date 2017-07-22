import React, { Component } from 'react'
import SellerCustomerMap from './SellerCustomerMap'

class ConfirmPurchase extends Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat: 14.7010556,
          lng: 120.9830225
        },
        key: 'Valenzuela',
        defaultAnimation: 2
      }]
    }

    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  }
  handleMapLoad (map) {
    this._mapComponent = map;
    // if (map) {
    //   console.log(map.getZoom())
    // }
  }
  handleMapClick (event) {
    console.log('+++', event.latLng.lat())
    const nextMarkers = [
      ...this.state.markers,
      {
        position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
        defaultAnimation: 2,
        key: Date.now()
      }
    ];
    this.setState({
      markers: nextMarkers
    });
  }
  handleMarkerRightClick (targetMarker) {
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers
    })
  }
  render () {
    return (
      <div style={{ height: '600px' }}>
        <SellerCustomerMap
          containerElement={
          <div style={{ height: '100%' }} />
        }
          mapElement={
          <div style={{ height: '100%' }} />
        }
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
        onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    )
  }
  
}

export default ConfirmPurchase
