import React, { useState } from 'react';
import axios from 'axios';
import WeatherCarousel from './WeatherCarousel';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setweatherData] = useState([]);

  const apiKey = '1b3ccbbbecb0224059af59271277bfd6';
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      const weatherData = response.data;
      const dailyForecasts = groupForecastByDay(weatherData.list);
      
      const next7Days = Object.keys(dailyForecasts).slice(0, 7);

      setweatherData(next7Days.map(day => {
          const middleForecastIndex = Math.floor(dailyForecasts[day].length / 2);
          const middleForecast = dailyForecasts[day][middleForecastIndex];
          return {
              date: day,
              temperature: middleForecast.main.temp,
              description: middleForecast.weather[0].description,
              feels_like: middleForecast.main.feels_like,
              humidity: middleForecast.main.humidity,
              pressure: middleForecast.main.pressure,
              wind_speed: middleForecast.wind.speed
          };
      }));
    }
    catch (error) {
      console.error('Error fetching forecast:', error);
    }
  };


  function groupForecastByDay(forecasts) {
    const dailyForecasts = {};
    forecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toDateString();
        if (!dailyForecasts[day]) {
            dailyForecasts[day] = [];
        }
        dailyForecasts[day].push(forecast);
    });
    return dailyForecasts;
}


  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          className='form'
        />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherCarousel weatherData={weatherData} />
    </div>
  );
};

export default Weather;