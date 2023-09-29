import React, { useState } from 'react';
import '../styles/subfooterbar.css';
import { Link } from 'react-router-dom';


const SubFooterBar = ({ isLoggedIn, selectedBeach }) => {
  const [isExpanded, setIsExpanded] = useState(false);


  console.log(selectedBeach);
  const toggleBar = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return (
        <>
          <p className="parrafo">Para ver más información, inicia sesión.</p>
          <Link to={"/login"}>
            <button className="buttonLog">Login</button>
          </Link>
        </>
      );
    }

    if (!selectedBeach) {
      return <div> <h1>Bienvenidos</h1> <div> <p className='parrafo'>Selecciona una playa para ver la información más detallada </p></div> </div>
    }

    // Define los elementos a mostrar y sus etiquetas
    const elements = [
      { label: 'pH', key: 'ph' },
      { label: 'Mercurio', key: 'mercury' },
      { label: 'Amonio', key: 'ammonium' },
      { label: 'E. coli', key: 'e-coli' },
      { label: 'Enterococcus', key: 'enterococcus' },
      { label: 'Turbidez', key: 'turbidity' },
      // Agrega más elementos aquí
    ];

    return (
      <div className="sub-footer-content">
        <div>
          <img id='phimage' src="/ph.svg" alt="" />
          <img id='mercuryimage' src="hg.svg" alt="" />
          <img id='ammonioimage' src="amonio.svg" alt="" />
          <img id='ecoliimage' src="ecoli.svg" alt="" />
          <img id='enterococcusimage' src="estre.svg" alt="" />
          <img id='turboimage' src="turbo.svg" alt="" />

        </div>
        <div className="grid-container">
          {elements.map((element, index) => (
            <div key={index} className="grid-item">
              <h1 className={`titulo-${element.key}`}>{element.label}</h1>
              <h2>{selectedBeach.info[element.key]}</h2>
              <h3>{selectedBeach.messages[element.key]}</h3>
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



