
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/comenzar.css"
import "../styles/background.css"

const Comenzar = () => {
  const [paginaActual, setPaginaActual] = useState(0);
  const navigate = useNavigate();
  const [inicioX, setInicioX] = useState(null);


  const paginas = [
    'Bienvenido',
    'Mantente Informado',
    'Únete al Cambio',
    'Disfrutemos la Playa'
  ];

  const siguientePagina = () => {
    if (paginaActual < paginas.length - 1) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const irAInicio = () => {
    navigate('/home');
  };




  const handleTouchStart = (e) => {
    setInicioX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const deltaX = e.touches[0].clientX - inicioX;
    if (deltaX > 50) {
      // Deslizamiento hacia la derecha, muestra la página anterior
      paginaAnterior();
    } else if (deltaX < -50) {
      // Deslizamiento hacia la izquierda, muestra la página siguiente
      siguientePagina();
    }
  };

  const handleTouchEnd = () => {
    setInicioX(null);
  };


  return (

    <div>
      <div className="background">
        {/* Logo */}
        <img src="logo.png" alt="Logo" className="logo" />

        {/* Fondo */}
        <img src="header.png" alt="Fondo" className="background-image" />

      </div>


      <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="comenzar-slider">
        <div className="slider-content">
          {/* Renderizar el contenido de cada página */}
          {paginaActual === 0 && (
            <div>
              <div>
                <img src="comenzar1.png" alt="comenzar" className="comenzarimg" />
              </div>
              <h2>¡Bienvenido a Aquality!</h2>
              <p>Embárcate en un viaje para descubrir y proteger la calidad del agua en tus playas favoritas.</p>
            </div>
          )}
          {paginaActual === 1 && (
            <div>
              <div>
                <img src="comenzar2.png" alt="comenzar" className="comenzarimg" />
              </div>
              <h2>Mantente informado</h2>
              <p>Recibe actualizaciones en tiempo real y alertas de seguridad de tus destinos preferidos.</p>
            </div>

          )}
          {paginaActual === 2 && (

            <div>
              <div>
                <img src="comenzar3.png" alt="comenzar" className="comenzarimg" />
              </div>
              <h2>Sé parte del cambio</h2>
              <p>Guarda tus lugares favoritos, comparte actualizaciones y contribuye a la preservación de nuestros recursos acuáticos.</p>
            </div>
          )}
          {paginaActual === 3 && (

            <div>
              <h4>Difrutemos de las playas con seguridad ¡Comencemos!</h4>
              <button className="btn-comenzar" onClick={irAInicio}>Comenzar</button>
            </div>
          )}
        </div>
        <div className="slider-dots">
        {paginas.map((pagina, index) => (
          <div
            key={index}
            className={`dot ${index === paginaActual ? 'active' : ''}`}
            onClick={() => setPaginaActual(index)}
          ></div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Comenzar;
