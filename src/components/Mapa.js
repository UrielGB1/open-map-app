import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { render } from '@testing-library/react'

export default class Mapa extends Component {
    constructor() {
        super();
        this.state = {
            markers: [[-5.79488, -35.211]]
        };
    }

    addMarker = (e) => {
        const {markers} = this.state
        markers.push(e.latlng)
        this.setState({markers})
    }

    render() {
        return (
            <Map 
                center={this.props.center} 
                zoom={this.props.zoom} 
                onClick={this.addMarker}
                style={{ width: '100%', height: '900px'}}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            {this.state.markers.map((position, idx) => 
                <Marker 
                    key={`marker-\${${idx}}`}
                    position={position}>
                <Popup>
                    Marcador Criado com Click <br />.
                </Popup>
            </Marker>
            )}
                <Marker 
                    key="initialMarker"
                    position={this.props.center}>
                    <Popup>
                        Insira Descrição Aqui <br /> Descrição.
                    </Popup>
                </Marker>
            </Map>
        )
    }

}
