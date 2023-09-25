import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/busqueda.css'
import { FaUmbrella } from 'react-icons/fa'; // Importa el icono de sombrilla


const customOption = ({ innerProps, label, data }) => (
  <div {...innerProps}>
    <FaUmbrella style={{ position: 'relative', top: '10px', marginLeft: '10px', marginRight: '10px', color: '#10597D', fontSize: '33px' }} /> {/* Agrega el icono de sombrilla */}
    {label}
  </div>
);

const Busqueda = ({ beaches, onSearch }) => {
  const [selectedBeach, setSelectedBeach] = useState(null);

  // Formatear los datos de las playas para que react-select los pueda entender
  const options = beaches.map((beach) => ({
    label: beach.name,
    value: beach,
  }));

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




