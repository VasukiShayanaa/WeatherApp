let express = require("express");
let router = express.Router();
const config = require("../../config");
const axios = require("axios");

router.get("/getWeatherDetails", async function (req, res) {
  const latitude = "12.8905315";
  const longitude = "77.5461435";

  const API_key = config.weather_api_secret_key;

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${API_key}`;
  try {
    console.log("url", url);
    const response = await axios.get(url);

    console.log("response", response);
    const weatherData = response.data;
    let weatherResponse = {
      cityName: weatherData.name,
      temperature: `${weatherData.main.temp / 100}°C`,
      minTemp: `${weatherData.main.temp_min / 100}°C`,
      maxTemp: `${weatherData.main.temp_max / 100}°C`,
      pressure: `${weatherData.main.pressure}`,
      humidity: `${weatherData.main.humidity}`,
      description: `${weatherData.weather[0].description}`,
    };
    console.log("\n weatherResponse", weatherResponse);
    res.status(200).send(weatherResponse);
  } catch (error) {
    console.error("\n getWeatherDetails: Error", error.message);
    res.status(500).send(`Error fetching weather data: ${error.message}`);
  }
});

module.exports = router;
