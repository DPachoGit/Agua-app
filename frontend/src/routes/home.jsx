import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoggedInContext from "../context/loggedInContext";
import Busqueda from "../components/busqueda";
import MenuFooter from "../components/menuFooter";
import BackgroundHome from "../components/background-home";
import SearchResults from "../components/resultadoBusqueda";
import BackgroundAzul from "../components/backgroundAzul";
import SubFooterBar from "../components/subfooter";
import { useBeachData } from '../context/beachDataContext';



const beachesData = [
  
    {
      "name": "La Arena",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 0,
        "turbidity": 23,
        "contamination": 'Buen estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Las Arenas",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 1,
        "turbidity": 23,
        "contamination": 'Buen estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Ereaga",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 1,
        "turbidity": 23,
        "contamination": 'Buen estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Arrigunaga",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 2,
        "turbidity": 23,
        "contamination": 'Mal estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Gorrondatxe",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 1,
        "turbidity": 23,
        "contamination": 'Mal estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Barinatxe",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 0,
        "turbidity": 23,
        "contamination": 'Mal estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Arriatera",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 0,
        "turbidity": 23,
        "contamination": 'Mal estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Meñakoz",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 1,
        "turbidity": 23,
        "contamination": 'Buen estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Barrika",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 2,
        "turbidity": 23,
        "contamination": 'Mal estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Muriola",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 2,
        "turbidity": 23,
        "contamination": 'Buen estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Plentzia",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 0,
        "turbidity": 23,
        "contamination": 'Buen estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    },
    {
      "name": "Gorliz",
      "info": {
        "ammonium": 23,
        "e-coli": 23,
        "enterococcus": 23,
        "mercury": 23,
        "ph": 23,
        "quality": 0,
        "turbidity": 23,
        "contamination": 'Mal estado', // Valor aleatorio del 20 al 100%
        "biologics": 16, // Valor aleatorio del 10 al 30%
        "chemicals": 21 // Valor aleatorio del 10 al 30%
      }
    }
  
  
  // Agrega más playas aquí
];

const Home = () => {

  const { allBeaches } = useBeachData();
console.log(allBeaches);


  const [isSearchVisible, setSearchVisible] = useState(true);
  const [isResultVisible, setResultVisible] = useState(false);
  const [selectedBeach, setSelectedBeach] = useState(null);




  // Función para manejar la selección de una playa
  const handleBeachSelect = (beach) => {
    setSelectedBeach(beach);
    setSearchVisible(false); // Ocultar el cuadro de búsqueda
    setResultVisible(true); // Mostrar los resultados
  };


 // Función para manejar el clic en el botón de búsqueda del footer
 const handleSearchFooterClick = () => {
  setSearchVisible(true); // Mostrar el cuadro de búsqueda
  setResultVisible(false); // Ocultar los resultados
};


  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn)
  }, [isLoggedIn]);

  return (
    <div>
      <main>
        <BackgroundHome />
        <BackgroundAzul />
        {isSearchVisible && (
          <Busqueda hola={allBeaches} beaches={beachesData} onSearch={handleBeachSelect} />
        )}
        {isResultVisible && (
          <SearchResults selectedBeach={selectedBeach} />
        )}
      </main>
      <footer>
      <SubFooterBar isLoggedIn={isLoggedIn} selectedBeach={selectedBeach}/>
        <MenuFooter onSearchFooterClick={handleSearchFooterClick} />
      </footer>
    </div>
  );
};

export default Home;
