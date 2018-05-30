import React, {Component} from 'react';
import Header from './Header'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from  'google-maps-react';
const API_KEY = 'AIzaSyA_BiGhxTrDhBx8bBEJ41Elbjt7n419I_Q';

class  MapContainer extends Component {
  state = {
    places:{},
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation:{
        lat: null,
        lng: null }
  };
 
  componentDidMount(){
    if (navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
        console.log('sf', this.state)

        //do a search for coffee then render results onto page. 

      });
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  // callback(results, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       createMarker(results[i]);
  //     }
  //   }
  // }
 
  //  callback(results, status) {
  //             if (status === google.maps.places.PlacesServiceStatus.OK) {
  //                 for (var i = 0; i < results.length; i++) {
  //                     createMarker(results[i]);
  //                 }
  //             }
  //  }
  
  // createMarker(place) {
  //             var placeLoc = place.geometry.location;
  //             var marker = new google.maps.Marker({
  //                 map : map,
  //                 position : place.geometry.location
  //             });
  
  // fetchPlaces(mapProps, map) {
  //   const {google} = mapProps;
  //   const service = new google.maps.places.PlacesService(map);
    
  // }
 
  render() {
    const style = {
      width: '100%',
      height: '70%',
      top: '100px',
      left: '5px',
    }
    
    return (
      <div>
        <Header />
        <div className='map'>
          <Map google={this.props.google}  
          style={style}
          center={
            {lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng}
          }
            zoom={14}
            onClick={this.onMapClicked}
            nearbySearch={{
              location: this.state.currentLocation,
              radius: 5500,
              type:['coffee']}
            }>

            <Marker onClick={this.onMarkerClick}
                      position={{lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng}}
                      />

            <InfoWindow onClose={this.onInfoWindowClose}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                  <h1> <span role="img" aria-labelledby="sleepy">😴 ☕</span> </h1>
                </div>
            </InfoWindow>
          </Map> 
        </div>  
      </div>    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)
