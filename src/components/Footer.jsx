import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "./Footer.css"

function Footer() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7
  };

const boxNumbers = Array.from({ length: 14 }, (_, index) => index + 1);

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

export default Footer

// const Footer = () => (
//   <>
//     <div>
//       <div className="row">
//       <div className="col">Tonight</div>
//         <div className="col">Friday</div>
//         <div className="col">Saturday</div>
//         <div className="col">Sunday</div>
//         <div className="col">Monday</div>
//         <div className="col">Tuesday</div>
//         <div className="col">Wednesday</div>
//         <div className="col">Thursday</div>
//       </div>
//     </div>
//   </>
// );

// export default Footer;

