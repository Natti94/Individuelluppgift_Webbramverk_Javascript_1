export async function WeatherData(lat, lon) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  try {
    const responseWeather = await fetch(apiUrl_weather);
    const DataWeather = await responseWeather.json();
    return DataWeather;
  } catch (error) {
    console.error("error fetching weather data", error);
    return null;
  } 
}

