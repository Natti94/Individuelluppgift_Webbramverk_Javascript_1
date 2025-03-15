import { useEffect } from "react";
import { WeatherData } from "../../API/weather";
import "./weather.css";

function Weather({ markedPosition, setWeatherData, weatherData, foreCast }) {
  useEffect(() => {
    if (!markedPosition) return;
    const getWeather = async () => {
      const data = await WeatherData(markedPosition.lat, markedPosition.lng);
      const forecast = weatherData?.daily?.slice(1, 6)?.map((day) => ({
        date: new Date(day.dt * 1000).toLocaleDateString(),
        temp: day.temp.day + "°C",
        description: day.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`,
      }));
      setWeatherData(data);
      foreCast(forecast)
    };
    getWeather();
  }, [markedPosition, setWeatherData]);
  if (!weatherData) return;
  return (
    <>
      <div className="weather-info">
        <h3>AT SELECTED LOCATION</h3>
        <h4>Temperature:</h4>
        <p>{weatherData.main.temp}"°C"</p>
        <h4>Today's Weather:</h4>
        <p>{weatherData.weather[0].description}</p>
        <h4>Time & Date:</h4>
        <p>
          {new Date(weatherData.dt * 1000).toLocaleTimeString()}
          {" | "}
          {new Date(weatherData.dt * 1000).toLocaleDateString()}
        </p>
        <h4>Coming Days:</h4>

        <div className="forecast">
          {forecast.map((day, index) => (
            <div key={index} className="forecast-day">
              <img src={day.icon} alt={day.description} />
              <p>{day.date}</p>
              <p>{day.temp}</p>
              <p>{day.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Weather;
