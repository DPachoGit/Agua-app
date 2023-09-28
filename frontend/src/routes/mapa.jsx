import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import '../styles/mapa.css'
import 'leaflet/dist/leaflet.css';
import MenuFooter from "../components/menuFooter";
import BackgroundHome from "../components/background-home";
import SubFooterBar from "../components/subfooter";
import { useBeachData } from '../context/beachDataContext';
import L from 'leaflet';


const Mapa = () => {

  const { allBeaches } = useBeachData();
  const [positions,setPositions] = useState({});


  useEffect(() => {
    if(allBeaches.length == 0) {
        return;
    }
    console.log("beaches",allBeaches)
    const newPositions ={
    laArena: {
        coords: [43.34972222, -3.11638889],
        name: "La Arena",
        value: allBeaches.beaches[0].info.quality,
        clima: "Dato clima 1"
    },
    lasArenas: {
        coords: [43.326955, -3.017522],
        name: "Las Arenas",
        value: allBeaches.beaches[1].info.quality,
        clima: "Dato clima 2"
    },
    ereaga: {
        coords: [43.34444444, -3.0125],
        name: "Ereaga",
        value: allBeaches.beaches[2].info.quality,
        clima: "Dato clima 3"
    },
    arrigunaga: {
        coords: [43.35611111, -3.01944444],
        name: "Arrigunaga",
        value: allBeaches.beaches[3].info.quality,
        clima: "Dato clima 4"
    },
    gorrondatxe: {
        coords: [43.38027778, -3.01527778],
        name: "Gorrondatxe",
        value: allBeaches.beaches[4].info.quality,
        clima: "Dato clima 5"
    },
    barinatxe: {
        coords: [43.382399999726, -3.0061000002366],
        name: "Barinatxe",
        value: allBeaches.beaches[5].info.quality,
        clima: "Dato clima 6"
    },
    arriatera: {
        coords: [43.389292, -2.994421],
        name: "Arriatera",
        value: allBeaches.beaches[6].info.quality,
        clima: "Dato clima 7"
    },
    meñakoz: {
        coords: [43.39498, -2.98631],
        name: "Meñakoz",
        value: allBeaches.beaches[7].info.quality,
        clima: "Dato clima 8"
    },
    barrika: {
        coords: [43.4043, -2.97425],
        name: "Barrika",
        value: allBeaches.beaches[8].info.quality,
        clima: "Dato clima 9"
    },
    muriola: {
        coords: [43.41428, -2.96174],
        name: "Muriola",
        value: allBeaches.beaches[9].info.quality,
        clima: "Dato clima 10"
    },
    plentzia: {
        coords: [43.41094, -2.94635],
        name: "Plentzia",
        value: allBeaches.beaches[10].info.quality,
        clima: "Dato clima 11"
    },
    gorliz: {
        coords: [43.4189, -2.94611],
        name: "Gorliz",
        value: allBeaches.beaches[11].info.quality,
        clima: "Dato clima 12"
    }
}
    setPositions(newPositions);

}, [allBeaches]);

const customIconGreen = new L.Icon({
  iconUrl: '../../public/greenMarker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 0],
});

const customIconYellow = new L.Icon({
  iconUrl: '../../public/yellowMarker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 0],
});

const customIconRed = new L.Icon({
  iconUrl: '../../public/redMarker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 0],
});


return (
  <>
    <BackgroundHome />
    <div className="map-container">
      <MapContainer center={[43.34536746789211, -2.9735209400269196]} zoom={12}  style={{ width: '370px', height: '800px' }} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Object.keys(positions).map((beachKey, index) => {
          let customIcon;

          switch (positions[beachKey].value) {
            case 0:
              customIcon = customIconGreen;
              break;
            case 1:
              customIcon = customIconYellow;
              break;
            case 2:
              customIcon = customIconRed;
              break;
            default:
              customIcon = customIconGreen;
          }

          return (
            <Marker key={index} position={positions[beachKey].coords} icon={customIcon}>
              <Popup><>
              <h2>{positions[beachKey].name}</h2></>
              <h3>{positions[beachKey].clima}</h3>
              </Popup>
            </Marker>
          );
        })}
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