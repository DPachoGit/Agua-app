import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '  '; // Reemplaza 'TU_API_KEY' con tu propia clave de OpenWeatherMap
  const beaches = [
    { name: "La Arena", lat: 43.312101, lon: -3.016956 },
    { name: "Las Arenas", lat: 43.325871, lon: -3.016159 },
    { name: "Ereaga", lat: 43.349036, lon: -2.990978 },
    // Agrega más playas aquí
  ];

  useEffect(() => {
    // Función para obtener datos del clima para una playa específica
    const fetchWeatherData = async (beach) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${beach.lat}&lon=${beach.lon}&appid=${apiKey}&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData({ beach: beach.name, temperature: data.main.temp, description: data.weather[0].description });
        } else {
          console.error('Error al obtener datos del clima.');
        }
      } catch (error) {
        console.error('Error en la solicitud de clima:', error);
      }
    };

    // Realizar solicitudes de clima para cada playa
    beaches.forEach((beach) => fetchWeatherData(beach));
  }, [apiKey, beaches]);

  return (
    <div>
      <h2>Condiciones del Clima en Playas de Bilbao</h2>
      {weatherData ? (
        <ul>
          {weatherData.map((data, index) => (
            <li key={index}>
              <strong>{data.beach}:</strong> {data.description}, {data.temperature}°C
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
