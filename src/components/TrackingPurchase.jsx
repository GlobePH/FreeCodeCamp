import React, { Component } from 'react'
import Tracking from './Tracking'

import '../styles/tracking.css'

class ConfirmPurchase extends Component {
  /* eslint-disable no-undef */
  constructor (props) {
    super(props);

    this.state = {
      origin: new google.maps.LatLng(41.8507300, -87.6512600),
      destination: new google.maps.LatLng(41.8525800, -87.6514100),
      directions: null
    }
  }
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }
  render () {
    return (
      <div className='tracking-purchase container'>
        <div className="row">
          <div className="col-sm-8 tracking-map-wrapper">
            <Tracking
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              center={this.state.origin}
              directions={this.state.directions}
            />
          </div>
          <div className="col-sm-4 tracking-details-wrapper">
            <div className="tracking-contents">
              <h3>Shipment Tracking</h3>
              <hr/>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }
  
}

export default ConfirmPurchase
