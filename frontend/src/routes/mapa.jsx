import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import '../styles/mapa.css'
import 'leaflet/dist/leaflet.css';


import MenuFooter from "../components/menuFooter";
import BackgroundHome from "../components/background-home";
import SubFooterBar from "../components/subfooter";



const Mapa = () => {
  // Coordenadas de las playas de Bilbao
  const beaches = [
    { name: "La Arena", coordinates: [43.312101, -3.016956] },
    { name: "Las Arenas", coordinates: [43.325871, -3.016159] },
    { name: "Ereaga", coordinates: [43.349036, -2.990978] },
    { name: "Arrigunaga", coordinates: [43.349171, -2.982675] },
    { name: "Gorrondatxe", coordinates: [43.394102, -3.035915] },
    { name: "Barinatxe", coordinates: [43.385442, -3.023117] },
    { name: "Arriatera", coordinates: [43.385424, -3.023117] },
    { name: "Meñakoz", coordinates: [43.404813, -3.081045] },
    { name: "Gorliz", coordinates: [43.399260, -2.929894] },
    { name: "Plentzia", coordinates: [43.318695, -3.009232] },
    { name: "Muriola", coordinates: [43.305616, -2.991908] },
    { name: "Barrika", coordinates: [43.332848, -2.980502] },
  ];

  const mapCenter = [43.349036, -2.990978]; // Coordenadas del centro del mapa (Ereaga)

  return (

    <>
      <BackgroundHome />
      
      <div className="map-container">
        <MapContainer center={mapCenter} zoom={12} style={{ width: '370px', height: '800px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {beaches.map((beach, index) => (
            <Marker key={index} position={beach.coordinates}>
              <Popup>{<>  <div>  <h1>beach.name</h1> <h2>  </h2>   </div>  </>}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <footer>
      <SubFooterBar />
        <MenuFooter  />
      </footer>
    </>
  );
};

export default Mapa;
