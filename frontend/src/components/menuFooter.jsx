import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoggedInContext from "../context/loggedInContext";
import '../styles/menuFooter.css'; // Asegúrate de crear un archivo de estilo Background.css para personalizar el fondo y los estilos
import { FaUser, FaSearch, FaCog, FaArrowLeft } from 'react-icons/fa';
import InfoWidget from "../components/info";
import Sidebar from "./barraLateral";
import '../styles/barraMenu.css'; // Asegúrate de crear un archivo de estilo Background.css para personalizar el fondo y los estilos


const MenuFooter = ({ onSearchFooterClick }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn)
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSearchClick = () => {
    // Navegar a la página de búsqueda si no estás en ella
    if (window.location.pathname !== '/home') {
      navigate('/home');
    }else {
      onSearchFooterClick(); // Llama a la función del prop para mostrar el cuadro de búsqueda
    }
  };

  const toggleConfig = () => {
    setInfoVisible(!infoVisible);
   // navigate('/info');
  };

  return (
    <main>
      <div id="menuFooter">
        {!isLoggedIn ? (
          <>
            <div onClick={toggleMenu}>
              <img className="vector" src="Vector.svg" alt="" /> {/* Icono de usuario */}
            </div>
            <div onClick={handleSearchClick}>
            <img className="circulolupafondo" src="button.svg" alt="" /> {/* Icono de usuario */}
            </div>
            <div onClick={toggleConfig}>
            <img className="vectorinfo" src="vectorinfo.svg" alt="" /> {/* Icono de usuario */}
            </div>
          </>
        ) : (
          <h2>chao</h2>
        )}
      </div>

      {menuVisible && (
        <div className="menu-lateral">
          <nav>
            <Sidebar />
          </nav>
        </div>
      )}

{infoVisible && (
        <div className="menu-lateral">
          <nav>
            <InfoWidget toggleConfig={toggleConfig} />
          </nav>
        </div>
      )}
     

      <Outlet />
    </main>




  );
};

export default MenuFooter;