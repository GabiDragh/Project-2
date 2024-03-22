// WeatherSlide.jsx
import React from 'react';
import  "./WeatherSlide.css"
import cloud from '../../assets/images/cloud.png'
import humidity from '../../assets/images/humidity.png'
import pressure from '../../assets/images/pressure.png'
import wind from '../../assets/images/wind.png'

const WeatherSlide = ({ forecast }) => {
  return (
    <div>
      <h2 className='date'>{forecast.date}</h2>
      <p className='temp'>{Math.floor(forecast.temperature)}°C <img src={cloud} width="50" height="10"></img></p>
      <p className='desc'>{forecast.description}</p>
      <p className='feels'>Feels like {forecast.feels_like}°C</p>
      <p className='humid'><img src={humidity} width="20" height="20"></img> {forecast.humidity}%</p>
      <p className='pressure'><img src={pressure} width="20" height="20"></img> {forecast.pressure}</p>
      <p className='wind'><img src={wind} width="20" height="20"></img> {forecast.wind_speed}m/s</p>
    </div>
  );
};

export default WeatherSlide;