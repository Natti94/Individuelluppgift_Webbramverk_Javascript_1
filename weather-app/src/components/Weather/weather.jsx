import { useEffect, useState } from "react";

function Weather({ markedPos }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!markedPos) return;

    const getWeather = async () => {
      const data = await WeatherData(markedPos.lat, markedPos.lng);
      setWeather(data);
    };

    getWeather();
  }, [markedPos]);

  if (!weather) return null;

  return (
    <div>
      <h2>weather at selected location</h2>
      <p>temperature: {weather.main.temp}</p>
      <p>weather: {weather.weather[0].description}</p>
    </div>
  );
}
export default Weather;
