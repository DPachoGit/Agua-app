import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/busqueda.css'
import { FaUmbrella } from 'react-icons/fa'; // Importa el icono de sombrilla


const customOption = ({ innerProps, label, data }) => (
  <div {...innerProps}>
    <FaUmbrella style={{ position: 'relative', top: '10px', marginLeft: '10px', color: '#10597D', fontSize: '33px' }} /> {/* Agrega el icono de sombrilla */}
    {label}
  </div>
);

const Busqueda = ({ hola, onSearch }) => {
 
  const [selectedBeach, setSelectedBeach] = useState(null);



let options = [];

// Verificar si hola.beaches no es undefined antes de realizar el mapeo
if (hola && hola.beaches !== undefined) {
  options = hola.beaches.map((beach) => ({
    label: beach.name,
    value: beach,
  }));
}

  // Función para manejar la selección de una playa
  const handleBeachSelect = (selectedOption) => {
    setSelectedBeach(selectedOption ? selectedOption.value : null);
    onSearch(selectedOption ? selectedOption.value : null);
  };

  return (
    <div>
      <section className="busqueda">
     <div className="titulobusqueda">
      <h2>Antes de empezar dinos que playa deseas consultar</h2>
     </div>
     <div className="selectbusqueda">
      <Select
        options={options}
        value={selectedBeach}
        onChange={handleBeachSelect}
        placeholder="Selecciona una playa..."
        components={{
          Option: customOption, // Utiliza la función personalizada para renderizar las opciones
        }}
        />
        </div>
        </section>
    </div>
  );
};

export default Busqueda;




