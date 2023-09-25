import React, { useState } from 'react';
import '../styles/subfooterbar.css';

const SubFooterBar = ({ isLoggedIn, selectedBeach }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBar = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return (
        <>
          <p>Para ver más información, inicia sesión.</p>
          <button>Login</button>
        </>
      );
    }

    if (!selectedBeach) {
      return 'Bienvenidos';
    }

    // Define los elementos a mostrar y sus etiquetas
    const elements = [
      { label: 'pH', value: selectedBeach.info.ph },
      { label: 'Mercurio', value: selectedBeach.info.mercury },
      { label: 'Amonio', value: selectedBeach.info.ammonium },
      { label: 'E. coli', value: selectedBeach.info['e-coli'] },
      { label: 'Enterococcus', value: selectedBeach.info.enterococcus },
      { label: 'Turbidez', value: selectedBeach.info.turbidity },
      // Agrega más elementos aquí
    ];

    return (
      <div className="sub-footer-content">
        <div className="grid-container">
          {elements.map((element, index) => (
            <div key={index} className="grid-item">
              <h1>{element.label}</h1>
              <h2>{element.value}</h2>
              <h3>Estos niveles son seguros.</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`sub-footer-bar ${isExpanded ? 'expanded' : ''}`}>
      <button className="toggle-button" onClick={toggleBar}>
        {isExpanded ? (
          <>
            <div className="barras-cerrar"></div>
            <div>
              <p>Cerrar</p>
            </div>
            <div className="barras-cerrar-abajo"></div>
          </>
        ) : (
          <>
            <div></div>
            <div className="barras-abrir"></div>
            <p className="mas-detalles">Más detalles</p>
          </>
        )}
      </button>
      {isExpanded && renderContent()}
    </div>
  );
};

export default SubFooterBar;



