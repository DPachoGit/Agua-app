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
          <h1>Tus Playas Favoritas</h1>
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