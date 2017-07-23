import React, { Component } from 'react'
import Tracking from './Tracking'
import { connect } from 'react-redux'
import moment from 'moment'

import '../styles/tracking.css'

class ConfirmPurchase extends Component {

  constructor (props) {
    /* eslint-disable no-undef */
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
              <p><span className='muted'>Customer: </span>&nbsp; Pat Salcedo</p>
              <p><span className='muted'>Farmer: </span>&nbsp; Juan Dela Cruz</p>
              <p><span className='muted'>Operating Center: </span>&nbsp; Farmbase - Baguio</p>
              <p><span className='muted'>ETD: </span>&nbsp; {moment('2017-07-22T23:10:45.361Z').format('LLL')}</p>
              <p><span className='muted'>ETA: </span>&nbsp; {moment('2017-07-22T24:59:45.361Z').format('LLL')}</p>
              <hr/>
              <p><span className='muted'>Current Location: </span>&nbsp; Binan, Laguna</p>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps)(ConfirmPurchase);
