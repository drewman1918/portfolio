import React, { Component } from 'react';
import './Contact.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <div id="mapBox">
            
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 40.4526041,
                    lng: -111.7802204
                }}
                zoom={11}
            >
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 40.4526041, lng: -111.7802204 }} />
                </Map>
                
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBuKdfbZ3uv7arnG29sbUQVEBEekJS4MJw'
})(MapContainer)