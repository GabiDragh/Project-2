import ReactWeather, { useOpenWeather } from "react-open-weather";
import {
  setKey,
  setDefaults,
  fromAddress,
  geocode,
  RequestType,
} from "react-geocode";

const Weather = () => {
  
  setDefaults({
    key: "AIzaSyC9qEaUqvbwazBZScpgJ_CZcXU5jbF1OU4", 
    language: "en", 
  });

  // Getting latitude & longitude from address.
  fromAddress("Eiffel Tower")
    .then(({ results }) => {
      const { lat, lng } = results[0].geometry.location;
      console.log(lat, lng);
      const { data, isLoading, errorMessage } = useOpenWeather({
        key: "cf98f413c40be2f82a74ed0fd421bb0c",
        lat: lat,
        lon: lon,
        lang: "en",
        unit: "metric", 
      });
      return (
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Munich"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast
        />
      );
    })
    .catch(console.error);
};

export default Weather;
