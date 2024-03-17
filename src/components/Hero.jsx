import React from 'react';

// TODO: Import asset components (weather scenes)?


const Hero = ({ weatherData }) => { //weatherData object destructuring prop in from API call - TODO: create component/take it from Jean or create a mock call to see some results!!!
    
    const skyText = weatherData[0].current.skytext; //check weather API for the skytext position - weather-js data returns it as written here, FIXME: but will have to change if different API used
    console.log(skyText);
    
    // TODO: Function to navigate through the sky text and return asset component

    const callAsset = (skyText) => {

        // Define variable to store simplified sky text information
        const currentSky = skytext.toLowerCase().replace(/(mostly | partly)\s+/g, ''); //replace keywords as mostly, cloudy, and the whitespace from the skytext
        console.log(currentSky);

        // DONE: Add swithcase statement that returns assest component based on simplified text from sky text
        switch (currentSky) {
            case 'sunny':
                return <SunnyScene />;
            case 'clear':
                return <ClearScene />
            case 'cloudy':
                return <CloudyScene />;
            case 'rain':
                return <RainScene />;
            case 'snow':
                return <SnowScene />;
            case 'storms':
                return <StormScene />;
            // FIXME: possible other cases? Weather APi dependent
            default:
                return 'Oops! Apologies, it seems I am having trouble processing that!'
        }
    };

    // TODO: Define variable to store the asset


    // TODO: Return in browser
    
    <>
        <div id ="hero">
            <p>
                WeatherRebel 3D Animation here
            </p>
        </div>
    </>
};

export default Hero;