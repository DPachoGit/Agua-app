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


const Home = () => {

  const { allBeaches, favBeaches, dataFavBeaches } = useBeachData();
 

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
          <Busqueda hola={allBeaches} onSearch={handleBeachSelect} />
        )}
        {isResultVisible && (
          <SearchResults selectedBeach={selectedBeach} />
        )}
      </main>
      <footer>
        <MenuFooter onSearchFooterClick={handleSearchFooterClick} />
      </footer>
    </div>
  );
};

export default Home;


