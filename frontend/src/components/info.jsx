import { useState, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
//import '../styles/Background.css'
import '../styles/info.css'
import { FaUser, FaSearch, FaCog, FaArrowLeft } from 'react-icons/fa';


const InfoWidget = ({ toggleConfig }) => {

  return (

    <div className="info">
     
      <div className="backgrounddd">
        {/* Fondo */}
        <div className="fondoazul-info">
      </div>
        <img src="header.png" alt="Fondo" className="background-image" />
      </div>
      <div className="burbujas">

 {/* Agrega el ícono de flecha hacia atrás */}
 <div className="arrow-back" onClick={toggleConfig}>
        <FaArrowLeft />
      </div>

        <h2>Información de componentes</h2>



        <section>
          <article>
            <div>
              <h3>Ph</h3>
            </div>
            <div>
              <p>Efectos: Piel irritada, Cansancio, Fatiga, Dolor, Espasmos, Caída del cabello...</p>
            </div>

            <div>
              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>7-8,5</h4>
              <h4>6</h4>
              <h4> {'>6 / <9'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
              <h3>E-coli</h3>
            </div>
            <div>
              <p>Efectos: Efectos en el organismo: Infecciones gastrointestinales.</p>
            </div>

            <div>
              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
             <h4>7-8,5</h4>
              <h4>6</h4>
              <h4> {'>6 / <9'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
              <h3>Streptococos</h3>
            </div>
            <div>
              <p>Efectos: Variedad de infecciones (garganta, piel, tracto urinario, corazón).</p>
            </div>

            <div>
              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>7-8,5</h4>
              <h4>6</h4>
              <h4> {'>6 / <9'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
              <h3>Yurbidez</h3>
            </div>
            <div>
              <p>Efectos: Infecciones, Problemas gastrointestinales y en la piel.</p>
            </div>

            <div>
              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>7-8,5</h4>
              <h4>6</h4>
              <h4> {'>6 / <9'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
              <h3>Amonio</h3>
            </div>
            <div>
              <p>Efectos: Toxicidad, Problemas respiratorios, Conversión a Nitrito.</p>
            </div>

            <div>
              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>7-8,5</h4>
              <h4>6</h4>
              <h4> {'>6 / <9'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
              <h3>Mercurio</h3>
            </div>
            <div>
              <p>Efectos: Neurotoxicidad, Daño renal, Problemas respiratorios...</p>
            </div>

            <div>
              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>7-8,5</h4>
              <h4>6</h4>
              <h4> {'>6 / <9'}</h4>
            </div>
          </article>
        </section>


      </div>


    </div >
  )
}

export default InfoWidget;