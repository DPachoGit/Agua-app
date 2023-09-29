import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBeachData } from '../context/beachDataContext';
import DeleteBeach from '../components/deleteBeach';
import '../styles/favoritos.css';
import BackgroundHome from '../components/background-home';
import MenuFooter from '../components/menuFooter';
import BackgroundAzul from "../components/backgroundAzul";
import { FaUser, FaSearch, FaCog, FaArrowLeft } from 'react-icons/fa';


const Favorites = () => {
  const { favBeaches, dataFavBeaches, email, removeBeachFromFavorites } = useBeachData();

  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (dataFavBeaches) {
        const updatedOptions = dataFavBeaches.map((beach) => ({
          label: beach.name,
          value: beach,
        }));
        setOptions(updatedOptions);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dataFavBeaches]);

  const handleRemoveFromFavorites = async (email, beach) => {
    await DeleteBeach(email, beach, removeBeachFromFavorites);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }



  const valores = {
    1: (
      <div className=''>
        <div>
          <h2>Precaución</h2>
        </div>
        <div>
          <img className='medio' src="media.svg" alt="Estado Medio" />

        </div>
      </div>),
    2: (
      <div className=''>
        <div>
          <h2>Buen estado</h2>
        </div>
        <div>
          <img className='buena' src="buena.svg" alt="Buen estado" />
        </div>
      </div>
    ),
    0: (
      <div className=''>
        <div>
          <h2>Peligro</h2>
        </div>
        <div>
          <img className='mala' src="mala.svg" alt="Mal estado" />

        </div>
      </div>
    )
  }



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




  return (
    <div>
      <BackgroundHome />
      <BackgroundAzul />
      <div className="backgrounddd">
        {/* Fondo */}
        <div className="fondoazul-info">
        </div>
      </div>
      <main className='main'>
        <div className='titulo'>
          <div className="arrow-back">
            <Link className="link" to="/home">
              <FaArrowLeft />
            </Link>
          </div>
          <h1>Mi lista</h1>
        </div>
        <div className='cajafav'>
          {options.map((beach) => (
            <div className="rectangulo-favoritos" key={beach.value.name}>
              <img src="Rectangfav.svg" alt="rectangulo" />
              <div className="estadofav">
                {(() => {
                  return valores[beach.value.info.quality]
                })()}
              </div>
              <h3>{beach.value.name}</h3>
              <h4>{playasBilbao[beach.value.name].Clima}</h4>
              <img className='quitar' src="quitarfa.svg" alt="" onClick={() => handleRemoveFromFavorites(email, beach.value.name)}></img>

            </div>

          ))}
        </div>
      </main>

      <footer>
        <MenuFooter />
      </footer>
    </div>
  );
};

export default Favorites;