import { useEffect } from "react";
import { WeatherData } from "../../API/weatherData";

function Weather({ markedPosition, setWeatherData, weatherData }) {
  useEffect(() => {
    if (!markedPosition) return;
    const getWeather = async () => {
      const data = await WeatherData({
        lat: markedPosition.lat,
        lng: markedPosition.lng,
      });
      setWeatherData(data);
    };
    getWeather();
  }, [markedPosition, setWeatherData]);
  if (!weatherData) return null;
  return (
    <div>
      <h2>weather at selected location</h2>
      <p>temperature: {weather.main.temp}</p>
      <p>weather: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default Weather;
