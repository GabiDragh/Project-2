// WeatherSlide.jsx
import React from 'react';

const WeatherSlide = ({ forecast }) => {
  return (
    <div>
      <h2>{forecast.date}</h2>
      <p>Temperature: {forecast.temperature}°C</p>
      <p>Description: {forecast.description}</p>
      <p>Feels like: {forecast.feels_like}°C</p>
      <p>Humidity: {forecast.humidity}%</p>
      <p>Pressure: {forecast.pressure}</p>
      <p>Wind Speed: {forecast.wind_speed}m/s</p>
    </div>
  );
};

export default WeatherSlide;