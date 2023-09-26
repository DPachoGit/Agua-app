import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBeachData } from '../context/beachDataContext';
import DeleteBeach from '../components/deleteBeach';

const Favorites = () => {
  const { favBeaches, dataFavBeaches, email, removeBeachFromFavorites } = useBeachData();


  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (dataFavBeaches && dataFavBeaches.length > 0) {
      const updatedOptions = dataFavBeaches.map((beach) => ({
        label: beach.name,
        value: beach,
      }));
      setOptions(updatedOptions);
      setIsLoading(false);
    }
  }, [dataFavBeaches]);

  const handleRemoveFromFavorites = async (email, beach) => {
    await DeleteBeach(email, beach, removeBeachFromFavorites);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Tus Playas Favoritas</h1>
      <Link to="/home">
        <button>Volver a Home</button>
      </Link>
      {options.map((beach) => (
        <div key={beach.value.name}>
          <h2>{beach.value.name}</h2>
          <p>Calidad: {beach.value.info.quality}</p>
          <button onClick={() => handleRemoveFromFavorites(email, beach.value.name)}>Eliminar de Favoritos</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
