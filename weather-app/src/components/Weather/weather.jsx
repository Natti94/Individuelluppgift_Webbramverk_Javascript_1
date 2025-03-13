import { useEffect } from "react";
import { WeatherData } from "../../API/data";
import "./weather.css";

function Weather({ markedPosition, setWeatherData, weatherData }) {
  useEffect(() => {
    if (!markedPosition) return;
    const getWeather = async () => {
      const data = await WeatherData(markedPosition.lat, markedPosition.lng);
      console.log(
        "Fetching weather for:",
        markedPosition.lat,
        markedPosition.lng
      );
      setWeatherData(data);
    };
    getWeather();
  }, [markedPosition, setWeatherData]);
  if (!weatherData) return null;
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
      </div>
    </>
  );
}

export default Weather;
