import { useState, useEffect } from "react";
import { WeatherData, ForeCastData } from "../../../backend/Services/Weather/weather";
import "./weather.css";

function Weather({ searchInput, markedPosition, addToFavourites, myPosition }) {
  const [weatherData, setWeatherData] = useState(null);
  const [foreCastData, setForeCastData] = useState([]);

  useEffect(() => {
    if (myPosition && myPosition[0] && myPosition[1]) {
      const [lat, lon] = myPosition;
      WeatherData(lat, lon).then((data) => setWeatherData(data || null));
      ForeCastData(lat, lon).then((data) => setForeCastData(data?.list || []));
    }
  }, [myPosition]); // Update when myPosition changes

  if (!weatherData) return null;

  const handleAddToFavourites = () => {
    const favouriteDataAdd = {
      id: Date.now(),
      location: weatherData.name,
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      timestamp: Math.floor(Date.now() / 1000),
    };
    addToFavourites(favouriteDataAdd);
  };

  return (
    <div className="weather-section">
      <div className="weather-info">
        <div className="weather-icons">
          <h3>📍</h3>
          <button type="submit" onClick={handleAddToFavourites}>
            ⭐
          </button>
        </div>
        <h4>Location:</h4>
        <p>{weatherData.name}</p>
        <h4>Temperature:</h4>
        <p>{weatherData.main.temp}°C</p>
        <h4>Weather:</h4>
        <p>{weatherData.weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
        />
        <h4>Time & Date:</h4>
        <p>
          {new Date(weatherData.dt * 1000).toLocaleTimeString()}
          <br />
          {new Date(weatherData.dt * 1000).toLocaleDateString()}
        </p>
      </div>
      <div className="forecast-info">
        <h4>Forecast:</h4>
        {foreCastData.length > 0 ? (
          foreCastData
            .filter((item, index) => index % 8 === 0)
            .map((day, index) => (
              <div key={index}>
                <p>
                  <strong>
                    {new Date(day.dt * 1000).toLocaleDateString()}
                  </strong>
                </p>
                <p>{day.weather[0].description}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
                <p>Temp: {day.main.temp}°C</p>
              </div>
            ))
        ) :
