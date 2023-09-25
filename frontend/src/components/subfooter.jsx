import React, { useState } from 'react';
import "../styles/subfooterbar.css"

const SubFooterBar = ({ isLoggedIn, selectedBeach }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sub-footer-bar ${isExpanded ? 'expanded' : ''}`}>
      <button className="toggle-button" onClick={toggleBar}>
        {isExpanded ? <> <div className="barras-cerrar"></div> <div><p>Cerrar</p></div> <div className="barras-cerrar-abajo"></div> </> : <><div></div> <div className="barras-abrir"></div> <p className="mas-detalles" > Más detalles</p> </> }
      </button>
      {isExpanded && (
        <div className="sub-footer-content">
          {isLoggedIn ? (
            <p>{selectedBeach ? selectedBeach.name: 'Bienvenidos'}</p>
          ) : (
            <>
              <p>Para ver más información, inicia sesión.</p>
              <button>Login</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SubFooterBar;


