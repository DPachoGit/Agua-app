import React from 'react';
import '../styles/resultados.css'
import { useBeachData } from '../context/beachDataContext';
import AddBeach from '../components/addBeach';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SubFooterBar from './subfooter';



const SearchResults = ({ selectedBeach }) => {
  const { email, addBeachToFavorites, favBeaches } = useBeachData();
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);


  useEffect(() => {

    if (favBeaches.includes(selectedBeach.name)) {
      setIsAddedToFavorites(true);
    }

  }, [favBeaches, selectedBeach]);




  const handleAddToFavorite = async (email, beach) => {
    await AddBeach(email, beach, addBeachToFavorites);
  };

  const valores = {
    1: (
      <div className='caja-estado'>
        <div>
          <h2>Estado Medio</h2>

        </div>
        <div>
          <img className='elipse' src="elipseamarillo.svg" alt="Estado Medio" />
          <img className='gota' src="gota.svg" alt="Estado Medio" />

        </div>
      </div>),
    2: (
      <div className='caja-estado'>
        <div>
          <h2>Buen estado</h2>
        </div>
        <div>
          <img className='elipse' src="ellipse3.svg" alt="Buen estado" />
          <img className='gota' src="gota.svg" alt="Buen estado" />
        </div>
      </div>
    ),
    0: (
      <div className='caja-estado'>
        <div>
          <h2>Mal estado</h2>

        </div>
        <div>
          <img className='elipse' src="ellipse5.svg" alt="Mal estado" />
          <img className='gota' src="gota.svg" alt="Mal estado" />

        </div>
      </div>
    )
  }

  console.log(isAddedToFavorites);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


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
                return valores[selectedBeach.info.quality]
              })()}
            </div>

            <div>
  {isLoggedIn ? (
    <Link to={isAddedToFavorites ? "/favorites" : "/favorites"}>
      <button
        className="boton-favortios"
        onClick={() => handleAddToFavorite(email, selectedBeach.name)}
      >
        {!isAddedToFavorites && (
          <img src="favoritos.svg" alt="fav" />
        )}
        {isAddedToFavorites ? "Ver en Mi lista" : "Agregar a Mi lista"}
      </button>
    </Link>
  ) : (
   <div> 
    <br />
    <br />
    <br />
    <br />
   </div>
  )}
</div>


            <div>
              <h3>Componentes del agua</h3>
            </div>

            <div className="cajacomponentes">
              <div>
                <h4>Biológicos</h4>
                <div>
                  {selectedBeach.info.quality === 1 && (
                    <p>La calidad del agua en cuanto a componentes biológicos es de medio estado.</p>
                  )}
                  {selectedBeach.info.quality === 2 && (
                    <p>La calidad del agua en cuanto a componentes biológicos es de buen estado.</p>
                  )}
                  {selectedBeach.info.quality === 0 && (
                    <p>La calidad del agua en cuanto a componentes biológicos es de mal estado.</p>
                  )}
                </div>
              </div>
              <div>
                <h4>Químicos</h4>
                <div>
                  {selectedBeach.info.quality === 1 && (
                    <p>El porcentaje de componentes químicos en la Playa  es de medio estado.</p>
                  )}
                  {selectedBeach.info.quality === 2 && (
                    <p>El porcentaje de componentes químicos en la Playa es de buen estado.</p>
                  )}
                  {selectedBeach.info.quality === 0 && (
                    <p>El porcentaje de componentes químicos en la Playa es de mal estado.</p>
                  )}
                </div>
              </div>
            </div>




          </section>

        </div>
      ) : (
        <p>Selecciona una playa para ver los resultados.</p>
      )}
      <SubFooterBar isLoggedIn={isLoggedIn} selectedBeach={selectedBeach} />

    </div>
  );
};

export default SearchResults;