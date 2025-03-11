import { useEffect } from "react";
import { WeatherData } from "../../API/weatherData";
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
        <h2 >WEATHER AT SELECTED LOCATION</h2>
        <h3>temperature: {weatherData.main.temp}°C</h3>
        <h3>weather: {weatherData.weather[0].description}</h3>
      </div>
    </>
  );
}
export default Weather;
