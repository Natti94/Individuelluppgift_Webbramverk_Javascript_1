import { useState, useEffect } from "react";
import { WeatherData } from "../../API/weather";
import "./weather.css";

function Weather({ searchInput, markedPosition, addToFavorites }) {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    let lat, lon;
    if (markedPosition) {
      if (Array.isArray(markedPosition)) {
        [lat, lon] = markedPosition;
      } else {
        lat = markedPosition.lat;
        lon = markedPosition.lng || markedPosition.lon;
      }
    } else if (searchInput) {
      lat = searchInput.lat;
      lon = searchInput.lon;
    }
    if (lat !== undefined && lon !== undefined) {
      WeatherData(lat, lon).then((data) => setWeatherData(data || null));
    }
  }, [searchInput, markedPosition]);

  if (!weatherData) return null;

  const handleAddToFavorites = () => {
    const favoriteData = {
      id: Date.now(),
      location: weatherData.name,
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
      timestamp: Math.floor(Date.now() / 1000),
    };
    addToFavorites(favoriteData);
  };
  return (
    <div className="weather-info">
      <h3>AT SELECTED LOCATION</h3>
      <h4>Location:</h4>
      <p>{weatherData.name}</p>
      <h4>Temperature:</h4>
      <p>{weatherData.main.temp}°C</p>
      <h4>Weather:</h4>
      <p>{weatherData.weather[0].main}</p>
      <h4>Time & Date:</h4>
      <p>
        {new Date(weatherData.dt * 1000).toLocaleTimeString()}
        {" | "}
        {new Date(weatherData.dt * 1000).toLocaleDateString()}
      </p>
      <h4>Coming Days:</h4>
      <p></p>
      <button type="submit" onClick={handleAddToFavorites}>
        Add to Favorites
      </button>
    </div>
  );
}

export default Weather;
