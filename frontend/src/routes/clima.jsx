import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Clima() {
  const [beachData, setBeachData] = useState({
    laArena: {
      coords: [43.34972222, -3.11638889],
      name: 'La Arena',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    lasArenas: {
      coords: [43.326955, -3.017522],
      name: 'Las Arenas',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    ereaga: {
      coords: [43.34444444, -3.0125],
      name: 'Ereaga',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    arrigunaga: {
      coords: [43.35611111, -3.01944444],
      name: 'Arrigunaga',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    gorrondatxe: {
      coords: [43.38027778, -3.01527778],
      name: 'Gorrondatxe',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    barinatxe: {
      coords: [43.382399999726, -3.0061000002366],
      name: 'Barinatxe',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    arriatera: {
      coords: [43.389292, -2.994421],
      name: 'Arriatera',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    meñakoz: {
      coords: [43.39498, -2.98631],
      name: 'Meñakoz',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    barrika: {
      coords: [43.4043, -2.97425],
      name: 'Barrika',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    muriola: {
      coords: [43.41428, -2.96174],
      name: 'Muriola',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    plentzia: {
      coords: [43.41094, -2.94635],
      name: 'Plentzia',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
    gorliz: {
      coords: [43.4189, -2.94611],
      name: 'Gorliz',
      clima: '',
      main: '',
      description: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
    },
  });

  useEffect(() => {
    async function fetchDataForBeaches() {
      for (const beachKey in beachData) {
        if (beachData.hasOwnProperty(beachKey)) {
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${beachData[beachKey].coords[0]}&lon=${beachData[beachKey].coords[1]}&appid=7007c890b73512c7832cce0e92bb3913`
            );
            const weatherData = response.data.weather[0];
            const mainData = response.data.main;

            beachData[beachKey].clima = weatherData.description;
            beachData[beachKey].main = weatherData.main;
            beachData[beachKey].description = weatherData.description;
            beachData[beachKey].temp = (mainData.temp - 273.15).toFixed(2); // Convertir de Kelvin a Celsius
            beachData[beachKey].feels_like = (mainData.feels_like - 273.15).toFixed(2); // Convertir de Kelvin a Celsius
            beachData[beachKey].temp_min = (mainData.temp_min - 273.15).toFixed(2); // Convertir de Kelvin a Celsius
            beachData[beachKey].temp_max = (mainData.temp_max - 273.15).toFixed(2); // Convertir de Kelvin a Celsius
            beachData[beachKey].humidity = mainData.humidity; // Agregar la humedad

          } catch (error) {
            console.error(`Error fetching weather data for ${beachData[beachKey].name}:`, error);
          }
        }
      }

      setBeachData({ ...beachData });
    }

    fetchDataForBeaches();
  }, []);

  return (
    <div>
      <h1>Playas de Bilbao</h1>
      <ul>
        {Object.values(beachData).map(beach => (
          <li key={beach.name}>
            <strong>Playa:</strong> {beach.name}, <strong>Clima:</strong> {beach.clima}, <strong>Descripción:</strong> {beach.description}, <strong>Temperatura:</strong> {beach.temp} °C, <strong>Sensación térmica:</strong> {beach.feels_like} °C, <strong>Temp. Mín:</strong> {beach.temp_min} °C, <strong>Temp. Máx:</strong> {beach.temp_max} °C, <strong>Humedad:</strong> {beach.humidity} Hr
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clima;
