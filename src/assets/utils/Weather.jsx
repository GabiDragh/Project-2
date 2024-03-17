import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'cf98f413c40be2f82a74ed0fd421bb0c',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};


export default Weather