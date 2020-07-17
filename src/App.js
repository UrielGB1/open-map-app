import React, { Component } from 'react';
import Mapa from './components/Mapa'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          location: null,
          zoom: 14,
      }
      this.getCurrentLocation = this.getCurrentLocation.bind(this)
      this.setCurrentLocation = this.setCurrentLocation.bind(this)
  }

  setCurrentLocation(currentLocation) {
      this.setState({location: currentLocation})
  }

  getCurrentLocation() {
      let self = this;
      navigator.geolocation.getCurrentPosition(function(position) {
          let updatedLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          }
          self.setCurrentLocation(updatedLocation)
      })
  }
  render() {
    this.getCurrentLocation();
    return (
      <Mapa center={this.state.location} zoom={this.state.zoom}/>
    );
  }
}

export default App;