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
  const [positions, setPositions] = useState({});


  const playasBilbao = {
    "La Arena": {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.73 °C",
      Sensacion: "20.71 °C",
      Min: "19.44 °C",
      Max: "22.38 °C",
      Humedad: 71,
    },
    "Las Arenas": {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.71 °C",
      Sensacion: "20.61 °C",
      Min: "19.39 °C",
      Max: "22.33 °C",
      Humedad: 68,
    },
    Ereaga: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.67 °C",
      Sensacion: "20.57 °C",
      Min: "19.38 °C",
      Max: "22.32 °C",
      Humedad: 68,
    },
    Arrigunaga: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.67 °C",
      Sensacion: "20.57 °C",
      Min: "19.41 °C",
      Max: "22.35 °C",
      Humedad: 68,
    },
    Gorrondatxe: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.53 °C",
      Sensacion: "20.41 °C",
      Min: "19.27 °C",
      Max: "22.21 °C",
      Humedad: 68,
    },
    Barinatxe: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.60 °C",
      Sensacion: "20.49 °C",
      Min: "19.34 °C",
      Max: "22.27 °C",
      Humedad: 68,
    },
    Arriatera: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.60 °C",
      Sensacion: "20.49 °C",
      Min: "19.32 °C",
      Max: "22.26 °C",
      Humedad: 68,
    },
    Meñakoz: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.60 °C",
      Sensacion: "20.49 °C",
      Min: "19.32 °C",
      Max: "22.26 °C",
      Humedad: 68,
    },
    Barrika: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.42 °C",
      Sensacion: "20.40 °C",
      Min: "19.44 °C",
      Max: "22.38 °C",
      Humedad: 72,
    },
    Muriola: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.22 °C",
      Sensacion: "20.18 °C",
      Min: "19.22 °C",
      Max: "22.16 °C",
      Humedad: 72,
    },
    Plentzia: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.47 °C",
      Sensacion: "20.45 °C",
      Min: "19.44 °C",
      Max: "22.38 °C",
      Humedad: 72,
    },
    Gorliz: {
      Clima: "despejado",
      Descripcion: "despejado",
      Temperatura: "20.25 °C",
      Sensacion: "20.21 °C",
      Min: "19.23 °C",
      Max: "22.16 °C",
      Humedad: 72,
    },
  };

  // Ejemplo de cómo acceder a los datos de una playa específica
  const playaLaArena = playasBilbao["La Arena"];
  console.log(playaLaArena);


  useEffect(() => {
    if (allBeaches.length == 0) {
      return;
    }
    console.log("beaches", allBeaches)
    const newPositions = {
      laArena: {
        coords: [43.34972222, -3.11638889],
        name: "La Arena",
        value: allBeaches.beaches[0].info.quality,
        clima: playasBilbao["La Arena"].Clima,
        descripcion: playasBilbao["La Arena"].Descripcion,
        temperatura: playasBilbao["La Arena"].Temperatura,
        sensacion: playasBilbao["La Arena"].Sensacion,
        min: playasBilbao["La Arena"].Min,
        max: playasBilbao["La Arena"].Max,
        humedad: playasBilbao["La Arena"].Humedad,
      },
      lasArenas: {
        coords: [43.326955, -3.017522],
        name: "Las Arenas",
        value: allBeaches.beaches[1].info.quality,
        clima: playasBilbao["Las Arenas"].Clima,
        descripcion: playasBilbao["Las Arenas"].Descripcion,
        temperatura: playasBilbao["Las Arenas"].Temperatura,
        sensacion: playasBilbao["Las Arenas"].Sensacion,
        min: playasBilbao["Las Arenas"].Min,
        max: playasBilbao["Las Arenas"].Max,
        humedad: playasBilbao["Las Arenas"].Humedad,
      },
      ereaga: {
        coords: [43.34444444, -3.0125],
        name: "Ereaga",
        value: allBeaches.beaches[2].info.quality,
        clima: playasBilbao["Ereaga"].Clima,
        descripcion: playasBilbao["Ereaga"].Descripcion,
        temperatura: playasBilbao["Ereaga"].Temperatura,
        sensacion: playasBilbao["Ereaga"].Sensacion,
        min: playasBilbao["Ereaga"].Min,
        max: playasBilbao["Ereaga"].Max,
        humedad: playasBilbao["Ereaga"].Humedad,
      },
      arrigunaga: {
        coords: [43.35611111, -3.01944444],
        name: "Arrigunaga",
        value: allBeaches.beaches[3].info.quality,
        clima: playasBilbao["Arrigunaga"].Clima,
        descripcion: playasBilbao["Arrigunaga"].Descripcion,
        temperatura: playasBilbao["Arrigunaga"].Temperatura,
        sensacion: playasBilbao["Arrigunaga"].Sensacion,
        min: playasBilbao["Arrigunaga"].Min,
        max: playasBilbao["Arrigunaga"].Max,
        humedad: playasBilbao["Arrigunaga"].Humedad,
      },
      gorrondatxe: {
        coords: [43.38027778, -3.01527778],
        name: "Gorrondatxe",
        value: allBeaches.beaches[4].info.quality,
        clima: playasBilbao["Gorrondatxe"].Clima,
        descripcion: playasBilbao["Gorrondatxe"].Descripcion,
        temperatura: playasBilbao["Gorrondatxe"].Temperatura,
        sensacion: playasBilbao["Gorrondatxe"].Sensacion,
        min: playasBilbao["Gorrondatxe"].Min,
        max: playasBilbao["Gorrondatxe"].Max,
        humedad: playasBilbao["Gorrondatxe"].Humedad,
      },
      barinatxe: {
        coords: [43.382399999726, -3.0061000002366],
        name: "Barinatxe",
        value: allBeaches.beaches[5].info.quality,
        clima: playasBilbao["Barinatxe"].Clima,
        descripcion: playasBilbao["Barinatxe"].Descripcion,
        temperatura: playasBilbao["Barinatxe"].Temperatura,
        sensacion: playasBilbao["Barinatxe"].Sensacion,
        min: playasBilbao["Barinatxe"].Min,
        max: playasBilbao["Barinatxe"].Max,
        humedad: playasBilbao["Barinatxe"].Humedad,
      },
      arriatera: {
        coords: [43.389292, -2.994421],
        name: "Arriatera",
        value: allBeaches.beaches[6].info.quality,
        clima: playasBilbao["Arriatera"].Clima,
        descripcion: playasBilbao["Arriatera"].Descripcion,
        temperatura: playasBilbao["Arriatera"].Temperatura,
        sensacion: playasBilbao["Arriatera"].Sensacion,
        min: playasBilbao["Arriatera"].Min,
        max: playasBilbao["Arriatera"].Max,
        humedad: playasBilbao["Arriatera"].Humedad,
      },
      meñakoz: {
        coords: [43.39498, -2.98631],
        name: "Meñakoz",
        value: allBeaches.beaches[7].info.quality,
        clima: playasBilbao["Meñakoz"].Clima,
        descripcion: playasBilbao["Meñakoz"].Descripcion,
        temperatura: playasBilbao["Meñakoz"].Temperatura,
        sensacion: playasBilbao["Meñakoz"].Sensacion,
        min: playasBilbao["Meñakoz"].Min,
        max: playasBilbao["Meñakoz"].Max,
        humedad: playasBilbao["Meñakoz"].Humedad,
      },
      barrika: {
        coords: [43.4043, -2.97425],
        name: "Barrika",
        value: allBeaches.beaches[8].info.quality,
        clima: playasBilbao["Barrika"].Clima,
        descripcion: playasBilbao["Barrika"].Descripcion,
        temperatura: playasBilbao["Barrika"].Temperatura,
        sensacion: playasBilbao["Barrika"].Sensacion,
        min: playasBilbao["Barrika"].Min,
        max: playasBilbao["Barrika"].Max,
        humedad: playasBilbao["Barrika"].Humedad,
      },
      muriola: {
        coords: [43.41428, -2.96174],
        name: "Muriola",
        value: allBeaches.beaches[9].info.quality,
        clima: playasBilbao["Muriola"].Clima,
        descripcion: playasBilbao["Muriola"].Descripcion,
        temperatura: playasBilbao["Muriola"].Temperatura,
        sensacion: playasBilbao["Muriola"].Sensacion,
        min: playasBilbao["Muriola"].Min,
        max: playasBilbao["Muriola"].Max,
        humedad: playasBilbao["Muriola"].Humedad,
      },
      plentzia: {
        coords: [43.41094, -2.94635],
        name: "Plentzia",
        value: allBeaches.beaches[10].info.quality,
        clima: playasBilbao["Plentzia"].Clima,
        descripcion: playasBilbao["Plentzia"].Descripcion,
        temperatura: playasBilbao["Plentzia"].Temperatura,
        sensacion: playasBilbao["Plentzia"].Sensacion,
        min: playasBilbao["Plentzia"].Min,
        max: playasBilbao["Plentzia"].Max,
        humedad: playasBilbao["Plentzia"].Humedad,
      },
      gorliz: {
        coords: [43.4189, -2.94611],
        name: "Gorliz",
        value: allBeaches.beaches[11].info.quality,
        clima: playasBilbao["Gorliz"].Clima,
        descripcion: playasBilbao["Gorliz"].Descripcion,
        temperatura: playasBilbao["Gorliz"].Temperatura,
        sensacion: playasBilbao["Gorliz"].Sensacion,
        min: playasBilbao["Gorliz"].Min,
        max: playasBilbao["Gorliz"].Max,
        humedad: playasBilbao["Gorliz"].Humedad,
      },
    };


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
        <MapContainer center={[43.34536746789211, -2.9735209400269196]} zoom={12} style={{ width: '370px', height: '800px' }} scrollWheelZoom={true}>
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
                  <h3>Clima: {positions[beachKey].clima}</h3>
                  <h3>Temp: {positions[beachKey].temperatura}</h3>
                  <h3>STC: {positions[beachKey].sensacion}</h3>
                  <h3>Tem Min: {positions[beachKey].min}</h3>
                  <h3>Tem Max: {positions[beachKey].max}</h3>
                  <h3>Humedad: {positions[beachKey].humedad}</h3>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <footer>
        <MenuFooter />
      </footer>
    </>
  );
};

export default Mapa;