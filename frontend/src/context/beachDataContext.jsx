import React, { createContext, useState, useContext, useEffect } from 'react';

const BeachDataContext = createContext();

export const useBeachData = () => {
  return useContext(BeachDataContext);
};

export const BeachDataProvider = ({ children }) => {
  const [favBeaches, setFavBeaches] = useState([]);
  const [allBeaches, setAllBeaches] = useState([]);

  const addBeachToFavorites = (beach) => {
    setFavBeaches([...favBeaches, beach]);
  };

  const removeBeachFromFavorites = (beach) => {
    setFavBeaches(favBeaches.filter((b) => b !== beach));
  };

  useEffect(() => {
    const fetchAllBeaches = async () => {
      try {
        const response = await fetch('http://localhost:3333/api/getallbeaches');
        if (response.ok) {
          const beachesData = await response.json();
          setAllBeaches(beachesData);
        } else {
          throw new Error('Error getting beaches');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllBeaches();
  }, []);

  return (
    <BeachDataContext.Provider
      value={{ favBeaches, allBeaches, addBeachToFavorites, removeBeachFromFavorites }}
    >
      {children}
    </BeachDataContext.Provider>
  );
};
