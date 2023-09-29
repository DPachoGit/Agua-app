import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [configVisible, setConfigVisible] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSearchClick = () => {
    // Navegar a la página de búsqueda si no estás en ella
    if (window.location.pathname !== '/busqueda') {
      navigate('/busqueda');
    }
  };

  const toggleConfig = () => {
    setConfigVisible(!configVisible);
  };

  const handleLogout = () => {
    // Realizar acciones de cierre de sesión
    // Navegar a la página de inicio de sesión u otra página si es necesario
    navigate('/logout');
  };

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logobarra">
        <img src="logo.png" alt="Logo" />
      </div>

      {/* Perfil */}
      <div className="perfil">
        <p>Perfil</p>
      </div>

      {/* Línea divisoria */}
      <hr />

      {/* Enlaces */}
      <nav className="enlaces">
      <ul>
  {isLoggedIn ? (
    <>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/favorites">Mi lista</Link></li>
      <li><Link to="/mapa">Mapa</Link></li>
      <li>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </li>
      <li><p>Versión 1.0.0</p></li>
    </>
  ) : (
    <>
      <li><Link to="/login">Iniciar sesión</Link></li>
      <li><Link to="/register">Registrarse</Link></li>
    </>
  )}
</ul>






      </nav>
    </aside>
  );
}

export default Sidebar;
