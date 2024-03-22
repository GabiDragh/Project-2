import React, { useState, useEffect } from 'react';

// DONE: Import asset components (weather scenes)

// import LandingScene from '../assets/Scenes/LandingScene.jsx'
import SunnyScene from '../assets/Scenes/SunnyScene.jsx'
import CloudyScene from '../assets/Scenes/CloudyScene.jsx'
import RainScene from '../assets/Scenes/RainScene.jsx'
import SnowScene from '../assets/Scenes/SnowScene.jsx'
import StormScene from '../assets/Scenes/StormScene.jsx'
import PropTypes from 'prop-types';



const Hero = ({ skyCode }) => { 


    // DONE: Function to navigate through the sky text and return asset component

    const callAsset = (skyCode) => {


    const sunny = [800];
    const cloudy = [801, 802, 803, 804];
    const rain = [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
    const snow = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
    const storm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
    // const atmosphere = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];

    //     // DONE: Add swithcase statement that returns assest component based on simplified text from sky text
        switch (true) {
            case sunny.includes(skyCode):
                return <SunnyScene />; 
            case cloudy.includes(skyCode):
                return <CloudyScene />;
            case rain.includes(skyCode):
                return <RainScene />;
            case snow.includes(skyCode):
                return <SnowScene />;
            case storm.includes(skyCode):
                return <StormScene />;
            default:
                return null;
        }
    };

    // DONE: Return in browser
    return (
        <div id="hero">

      {callAsset(skyCode)}

                
        </div>
);

};

Hero.propTypes = {
    skyCode: PropTypes.number.isRequired, 
  };

export default Hero