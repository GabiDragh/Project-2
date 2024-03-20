import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "./Cards.css"

function Cards() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

const boxNumbers = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <Slider {...settings}>
      {boxNumbers.map((number) => (
        <div key={number} className="box">
          <h3>{number}</h3>
        </div>
      ))}
    </Slider>
  );
}

export default Cards


