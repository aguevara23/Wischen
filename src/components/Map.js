import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render(){
    const markers = this.props.marks || [];

    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 51.246412, lng: 6.770863}}>
        {markers.map((marker, index) => (
          <Marker {...marker} />
          )
        )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
