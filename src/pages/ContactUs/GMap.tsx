// import React, { Component } from 'react';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

// class GMap extends Component {
 
//   render() {
//     return (
//       <Map
//         style={{ width: '100%', height: '100%' }}
        
//           initialCenter={{
//             lat: 22.616257,
//             lng: 88.384443
//         }}
//         />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBhuhdUUzs992lLPYvF9_bU7KTQTv3bHU4"
// })(GMap)


import React, {Component} from 'react'
import {Map ,InfoWindow, Marker, GoogleApiWrapper, mapEventHandler, markerEventHandler} from 'google-maps-react';

const mapStyle = {
    width: '920px',
    height: '500px'
}

export class GMap extends Component<{google:any}>{
    // onMapClicked: mapEventHandler;
    // onMarkerClick: markerEventHandler;
    onInfoWindowClose: any;
    // map?: google.maps.Map | google.maps.StreetViewPanorama

    render(){
        return(
            <>
              
            </>
        )
    }
}

const GoogleMap = GoogleApiWrapper({
    apiKey: "AIzaSyBhuhdUUzs992lLPYvF9_bU7KTQTv3bHU4"
})(GMap)


export default GoogleMap;