import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const SellerCustomerMap = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: 14.7010556, lng: 120.9830225 }}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker, index) => {
        <Marker
          {...marker}
          key={index}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      })}
    </GoogleMap>
  )
});

export default SellerCustomerMap;
