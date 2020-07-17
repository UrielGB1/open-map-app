import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { render } from '@testing-library/react'

export default class Mapa extends Component {

    render() {
        return (
            <Map 
                center={this.props.center} 
                zoom={this.props.zoom} 
                style={{ width: '100%', height: '900px'}}
            >
            <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </Map>
        )
    }

}
