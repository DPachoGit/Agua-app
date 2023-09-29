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
              <img className="icono" src="ph.svg" alt="lino" />
              <h3>Ph</h3>
            </div>
            <div>
              <p>Efectos: Piel irritada, Cansancio, Fatiga, Dolor, Espasmos, Caída del cabello...</p>
            </div>

            <div>
              <img className="separa" src="separa.svg" alt="" />
              <img className="separacentro" src="separa.svg" alt="" />
            <img className="separadecha" src="separa.svg" alt="" />
              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>6</h4>
              <h4>7</h4>
              <h4> {'>9'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
            <img src="ecoli.svg" alt="lino" />

              <h3>E-coli</h3>
            </div>
            <div>
              <p>Efectos: Efectos en el organismo: Infecciones gastrointestinales.</p>
            </div>

            <div>
            <img className="separa" src="separa.svg" alt="" />
            <img className="separacentro" src="separa.svg" alt="" />
            <img className="separadecha" src="separa.svg" alt="" />

              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
             <h4>0 UFC/100ml</h4>
              <h4>170 UFC/100ml</h4>
              <h4> {'>235 UFC/100ml'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
            <img src="estre.svg" alt="lino" />

              <h3>Streptococos</h3>
            </div>
            <div>
              <p>Efectos: Variedad de infecciones (garganta, piel, tracto urinario, corazón).</p>
            </div>

            <div>
            <img className="separa" src="separa.svg" alt="" />
            <img className="separacentro" src="separa.svg" alt="" />
            <img className="separadecha" src="separa.svg" alt="" />

              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>0 UFC/100ml</h4>
              <h4>20 UFC/100ml</h4>
              <h4> {'>35 UFC/100ml'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
            <img src="turbo.svg" alt="lino" />

              <h3>Turbidez</h3>
            </div>
            <div>
              <p>Efectos: Infecciones, Problemas gastrointestinales y en la piel.</p>
            </div>

            <div>
            <img className="separa" src="separa.svg" alt="" />
            <img className="separacentro" src="separa.svg" alt="" />
            <img className="separadecha" src="separa.svg" alt="" />

              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>0 NTU</h4>
              <h4>4 NTU</h4>
              <h4> {'>5 NTU'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
            <img src="amonio.svg" alt="lino" />

              <h3>Amonio</h3>
            </div>
            <div>
              <p>Efectos: Toxicidad, Problemas respiratorios, Conversión a Nitrito.</p>
            </div>

            <div>
            <img className="separa" src="separa.svg" alt="" />
            <img className="separacentro" src="separa.svg" alt="" />
            <img className="separadecha" src="separa.svg" alt="" />

              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>0.05 mg/l</h4>
              <h4>0.8 mgl</h4>
              <h4> {'>1 mg/l'}</h4>
            </div>
          </article>
        </section>

        <section>
          <article>
            <div>
            <img src="hg.svg" alt="lino" />

              <h3>Mercurio</h3>
            </div>
            <div>
              <p>Efectos: Neurotoxicidad, Daño renal, Problemas respiratorios...</p>
            </div>

            <div>
            <img className="separa" src="separa.svg" alt="" />
            <img className="separacentro" src="separa.svg" alt="" />
            <img className="separadecha" src="separa.svg" alt="" />

              <hr />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
            >
              <h4>0.05 µg/L</h4>
              <h4>0.8 µg/L</h4>
              <h4> {'>1 µg/L'}</h4>
            </div>
          </article>
        </section>


      </div>


    </div >
  )
}

export default InfoWidget;