import React from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

const TrackingDirections = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={props.center}
    >
      {props.directions && <DirectionsRenderer directions={props.directions}/>}
    </GoogleMap>
  )
});

export default TrackingDirections;
