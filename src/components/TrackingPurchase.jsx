import React, { Component } from 'react'
import Tracking from './Tracking'
import { connect } from 'react-redux'
import moment from 'moment'
import { firebaseConnect, dataToJS } from "react-redux-firebase";
import { compose } from "redux";

import '../styles/tracking.css'

class ConfirmPurchase extends Component {

  constructor (props) {
    /* eslint-disable no-undef */
    super(props);

    let latUser = 14.553406
    let lngUser = 121.0499226
    let latCrop = 14.5995124
    let lngCrop = 120.9842195

    this.state = {
      origin: new google.maps.LatLng(latCrop, lngCrop),
      destination: new google.maps.LatLng(latUser, lngUser),
      directions: null,
      timer: 0,
      showMessage: false,
      locations: ['Malate Manila', 'Pasay City', 'Makati City']
    }
    this.renderDeliver = this.renderDeliver.bind(this);
  }
  componentDidMount () {
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
        console.error(`error fetching directions ${result}`)
      }
    });
  }
  renderDeliver () {
    this.locationInverval = setInterval(() => {
      this.setState({ timer: this.state.timer++, showMessage: true });
    }, 5000);

    if (this.state.timer === 3) {
      clearInterval(this.locationInverval);
      clearTimeout(this.showOff);
    }

  }
  renderLoading () {
    return (
      <p>Loading...</p>
    )
  }
  renderComponent () {
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
              <p><span className='muted'>ETD: </span>&nbsp; {moment('2017-07-22T10:10:45.361Z').format('LLL')}</p>
              <p><span className='muted'>ETA: </span>&nbsp; {moment('2017-07-22T11:59:45.361Z').format('LLL')}</p>
              <hr/>
              <p><span className='muted'>Current Location: </span>&nbsp; Pasay city</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render () {
    if (google) {
      return this.renderComponent();
    } else {
      return this.renderLoading();
    }
  }
}

const mapStateToProps = (state) => ({
  state: state,
  crops: dataToJS(state.firebase, 'crops'),
  users: dataToJS(state.firebase, 'users')
})

export default compose(firebaseConnect(['crops', 'users']),connect(mapStateToProps))(ConfirmPurchase);
