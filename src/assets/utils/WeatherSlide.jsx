// WeatherSlide.jsx
import React from 'react';
import  "./WeatherSlide.css"

const WeatherSlide = ({ forecast }) => {
  return (
    <div>
      <h2 className='date'>{forecast.date}</h2>
      <p className='temp'>{Math.floor(forecast.temperature)}°C <img src="src/assets/images/cloud.svg"  width="50" height="10"></img></p>
      <p className='desc'>{forecast.description}</p>
      <p className='feels'>Feels like {forecast.feels_like}°C</p>
      <p className='humid'><img src="src/assets/images/humid.svg" width="20" height="20"></img> {forecast.humidity}%</p>
      <p className='pressure'><img src="src/assets/images/pressure.svg" width="20" height="20"></img> {forecast.pressure}</p>
      <p className='wind'><img src="src/assets/images/wind.svg" width="20" height="20"></img> {forecast.wind_speed}m/s</p>
    </div>
  );
};

export default WeatherSlide;