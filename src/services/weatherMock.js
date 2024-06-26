
// !'For mocking API calls specifically, I would recommend using Sinon in conjunction with Mocha for testing. ' - from xpert assistant!

// TODO: Create api mock using jest/sinon? 

// DONE: Install package npm i sinon npm i jest

// DONE: Define var that requires sinon testing module (use axios - require axios/use mocha - require chai)-for JS/import for react
import sinon from 'sinon';
import weather from 'weather-js';

// DONE: Write API call function - as in weather-js documentation
function weatherMock(city) { 
    return new Promise((resolve, reject) => {
        weather.find({ search: city, degreeType: 'C' }, function(err, result) {
            if (err) {
                reject(err); //from xpert learning //console.log(err) - from weather-js documentation
            } else {
                resolve(result); //from xpert learning //console.log(JSON.stringify(result, null, 2)) - from weather-js documentation
            } 
        });
    });
}
// FIXME: Create Sinon stub to mock the API call
const weatherStub = sinon.stub(weather, 'find');
weatherStub.withArgs({ search: 'New York', degreeType: 'C' }).yields(null, [{ location: 'New York', temperature: '25°C' }]);


// FIXME: Call the function that makes the weather-js API call
weatherMock('New York').then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});


// FIXME: Restore the original weather.find method
weather.find.restore();


export default weatherMock;

