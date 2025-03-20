import { useEffect } from "react";
import { WeatherData } from "../../API/weather";
import "./weather.css";

function Weather({ markedPosition, setWeatherData, weatherData }) {
  useEffect(() => {
    if (!markedPosition) return;
    async function fetchWeather() {
      const data = await WeatherData(markedPosition.lat, markedPosition.lng);
      setWeatherData(data);
    }
    fetchWeather();
  }, [markedPosition, setWeatherData]);
  if (!weatherData) return;
  return (
    <>
      <div className="weather-info">
        <h3>AT SELECTED LOCATION</h3>
        <h4>Temperature:</h4>
        <p>{weatherData.main.temp}°C</p>
        <h4>Weather:</h4>
        <p>{weatherData.weather[0].description}</p>
        <h4>Time & Date:</h4>
        <p>
          {new Date(weatherData.dt * 1000).toLocaleTimeString()}
          {" | "}
          {new Date(weatherData.dt * 1000).toLocaleDateString()}
        </p>
        <h4>Coming Days:</h4>
        <p></p>
      </div>
    </>
  );
}

export default Weather;
