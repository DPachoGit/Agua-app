import React from 'react';
import '../styles/resultados.css'
import { useBeachData } from '../context/beachDataContext';
import AddBeach from '../components/addBeach';

const SearchResults = ({ selectedBeach }) => {
  const { email, addBeachToFavorites } = useBeachData();

  const handleAddToFavorite = async (email, beach) => {
    await AddBeach(email, beach, addBeachToFavorites);
  };


  return (
    <div>
      {selectedBeach ? (
        <div>
          <section className="resultados">

            <div>
              <h1>{selectedBeach.name}</h1>
            </div>

            <div className="estado-agua">
              {(() => {
                switch (selectedBeach.info.quality) {
                  case 2:
                    return (
                      <div className='caja-estado'>
                        <div>
                          <h2>Buen estado</h2>
                        </div>
                        <div>
                          <img className='elipse' src="ellipse3.svg" alt="Buen estado" />
                          <img className='gota' src="gota.svg" alt="Buen estado" />
                        </div>
                      </div>
                    );
                  case 0:
                    return (
                      <div className='caja-estado'>
                        <div>
                        <h2>Mal estado</h2>

                        </div>
                        <div>
                        <img className='elipse' src="ellipse5.svg" alt="Mal estado" />
                        <img className='gota' src="gota.svg" alt="Mal estado" />

                        </div>
                      </div>
                    );
                  case 1:
                    return (
                      <div className='caja-estado'>
                        <div>
                        <h2>Estado Medio</h2>

                        </div>
                        <div>
                        <img className='elipse' src="elipseamarillo.svg" alt="Estado Medio" />
                        <img className='gota' src="gota.svg" alt="Estado Medio" />

                        </div>
                      </div>)
                  default:
                    return null; // Manejo de caso no especificado, puedes cambiarlo según tus necesidades
                }
              })()}
            </div>

            <div>
            <button onClick={() => handleAddToFavorite(email, selectedBeach.name)}>Agregar a Favoritos</button>
          </div>

            <div>
              <h3>Componentes del agua</h3>
            </div>

            <div className="cajacomponentes">

              <div>
                <h4>Biológicos</h4>
                <div>
                  <p>La calidad del agua en cuanto a componentes biológicos es correcta.</p>

                </div>
              </div>
              <div>
                <h4>Químicos</h4>
                <div>
                  <p>El porcentaje de componentes químicos en la Playa de Ereaga ha cambiado respecto a la semana pasada.</p>

                </div>
              </div>

            </div>



          </section>

        </div>
      ) : (
        <p>Selecciona una playa para ver los resultados.</p>
      )}
    </div>
  );
};

export default SearchResults;


/*<h3>{selectedBeach.name}</h3>
          <ul>
            <li>Ammonium: {selectedBeach.info.ammonium}</li>
            <li>E. Coli: {selectedBeach.info["e-coli"]}</li>
            <li>Enterococcus: {selectedBeach.info.enterococcus}</li>
            <li>Mercury: {selectedBeach.info.mercury}</li>
            <li>pH: {selectedBeach.info.ph}</li>
            <li>Calidad: {selectedBeach.info.quality}</li>
            <li>Turbidez: {selectedBeach.info.turbidity}</li>
            <li>Contamination: {selectedBeach.info.contamination}</li>
            <li>Biologics: {selectedBeach.info.biologics}</li>
            <li>Chemicals: {selectedBeach.info.chemicals}</li>
          </ul> */