export async function WeatherData(lat, lon) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl_location = "https://ip-api.com/json/";
  const apiUrl_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const responseLocation = await fetch(apiUrl_location);
    const responseWeather = await fetch(apiUrl_weather);
    return await responseLocation.json() && responseWeather.json();
  } catch (error) {
    console.error("error fetching your location", error);
    console.error("error fetching weather data", error);
    return null;
  }
}