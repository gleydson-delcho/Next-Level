import React from 'react';
import mapMarker from '../images/map-marker.svg';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; 
import '../styles/orphanages-map.css'; 

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa.</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </footer>
            </aside>
            <Map center={[-15.8171136,-48.0182272]} zoom={14} style={{ width: '100%', height: '100%' }}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* Opção de colocar o mapa com a api do mapbox. */}
                {/* <TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'}  */}
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;