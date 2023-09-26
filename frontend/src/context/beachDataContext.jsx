import React, { createContext, useState, useContext, useEffect } from 'react';

const BeachDataContext = createContext();

export const useBeachData = () => {
  return useContext(BeachDataContext);
};

export const BeachDataProvider = ({ children }) => {
  const [favBeaches, setFavBeaches] = useState([]);
  const [allBeaches, setAllBeaches] = useState([]);
  const [dataFavBeaches, setDataFavBeaches] = useState([]);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const addBeachToFavorites = (beach) => {
    setFavBeaches([...favBeaches, beach]);
  };

  const removeBeachFromFavorites = (beach) => {
    setFavBeaches(favBeaches.filter((b) => b !== beach));
  };

  useEffect(() => {
    const storedEmail = JSON.parse(localStorage.getItem('user'));
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []); 

  useEffect(() => {
    const fetchAllBeaches = async () => {
      try {
        const response = await fetch('http://localhost:3333/api/getAllBeaches');
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

  useEffect(() => {
    const fetchFav = async () => {
      try {
        let result = await fetch('http://localhost:3333/api/getfavbeaches', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email}),
        });

        if (!result.ok) {
          const message = await result.json();
          setError(message.message);
          return;
        }
        result = await result.json();
        setFavBeaches(result.favBeaches);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFav();
  }, [email]);

  useEffect(() => {
    if (allBeaches && allBeaches.beaches) {
      const filteredBeaches = allBeaches.beaches.filter(beach =>
        favBeaches.includes(beach.name)
      );
      setDataFavBeaches(filteredBeaches);
      console.log("DataFavBeaches actualizado:");
    }
  }, [setFavBeaches, allBeaches, ]);

  return (
    <BeachDataContext.Provider
      value={{ favBeaches, allBeaches, dataFavBeaches, email, setFavBeaches, addBeachToFavorites, removeBeachFromFavorites, setEmail }}
    >
      {children}
    </BeachDataContext.Provider>
  );
};
