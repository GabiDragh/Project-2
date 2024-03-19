import React, { useState, useEffect } from 'react';
import Weather from '../assets/utils/Weather';

const Hero = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        Weather.find({ search: 'San Francisco, CA', degreeType: 'F' }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                setWeatherData(result[0]);
            }
        });
    }, []);

    return (
        <>
            <div id="hero">
                <p>WeatherRebel 3D Animation here</p>
            </div>
            {weatherData && (
                <div>
                    <p>Temperature: {weatherData.current.temperature}°F</p>
                    <p>Weather: {weatherData.current.skytext}</p>
                    {/* Add more weather data as needed */}
                </div>
            )}
        </>
    );
};

export default Hero;







// import React from 'react';
// import Weather from '../assets/utils/Weather';


// const Hero = () => (
//     <>
//         <div id ="hero">
//             <p>
//                 WeatherRebel 3D Animation here
//             </p>
//         </div>
//         <Weather/>
//     </>
// );

// export default Hero;