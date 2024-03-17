import weather from 'weather-js';

weather.find({ search: 'San Francisco, CA', degreeType: 'F' }, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(result, null, 2));
    }
});

export default Weather;