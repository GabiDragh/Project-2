import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WeatherSlide from './WeatherSlide'; // Import WeatherSlide component
import  "./WeatherCarousel.css"

const WeatherCarousel = ({ weatherData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  if (!weatherData) {
    return <p>No weather data</p>;
  }

  return (
    <Slider {...settings}>
      {weatherData.map((forecast, index) => (
        <div key={index} className='box'>
          <WeatherSlide forecast={forecast} />
        </div>
      ))}
    </Slider>
  );
};

export default WeatherCarousel;