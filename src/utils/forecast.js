const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b509f6305c507a62f8254270e1cdc538&query=${longitude},${latitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. The temperature is ${body.current.temperature}. Feels like ${body.current.feelslike}.`
      );
    }
  });
};

module.exports = forecast;
