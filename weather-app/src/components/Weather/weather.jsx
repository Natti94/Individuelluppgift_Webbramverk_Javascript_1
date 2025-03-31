import { useState, useEffect } from "react";
import { WeatherData, ForeCastData } from "../../API/weather";
import "./weather.css";

function Weather({ searchInput, markedPosition, addToFavourites }) {
  const [weatherData, setWeatherData] = useState(null);
  const [foreCastData, setForeCastData] = useState([]);
  useEffect(() => {
    let lat, lon;
    if (markedPosition) {
      [lat, lon] = Array.isArray(markedPosition)
        ? markedPosition
        : [markedPosition.lat, markedPosition.lng || markedPosition.lon];
    } else if (searchInput) {
      ({ lat, lon } = searchInput);
    }
    if (lat !== undefined && lon !== undefined) {
      WeatherData(lat, lon).then((data) => setWeatherData(data || null));
      ForeCastData(lat, lon).then((data) => setForeCastData(data?.list || []));
    }
  }, [searchInput, markedPosition]);
  if (!weatherData) return null;
  const handleAddToFavourites = () => {
    const favouriteDataAdd = {
      id: Date.now(),
      location: weatherData.name,
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
      timestamp: Math.floor(Date.now() / 1000),
    };
    addToFavourites(favouriteDataAdd);
  };
  return (
    <div className="weather-section">
      <h3>📍</h3>
      <p>Add this to location as favourite? ⭐</p>
      <button type="submit" onClick={handleAddToFavourites}>
      Favourite
      </button>
      <h4>Location:</h4>
      <p>{weatherData.name}</p>
      <h4>Temperature:</h4>
      <p>{weatherData.main.temp}°C</p>
      <h4>Weather:</h4>
      <p>{weatherData.weather[0].main}</p>
      <h4>Time & Date:</h4>
      <p>
        {new Date(weatherData.dt * 1000).toLocaleTimeString()} |{" "}
        {new Date(weatherData.dt * 1000).toLocaleDateString()}
      </p>
      {}
      <h4>coming Days:</h4>
      <div>
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
                <p>Temp: {day.main.temp}°C</p>
              </div>
            ))
        ) : (
          <p>no forecast data available.</p>
        )}
      </div>
    </div>
  );
}

export default Weather;
