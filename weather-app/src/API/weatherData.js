export async function WeatherData(lat, lon) {
  const apiKey = import.meta.env.VITE_API_KEY
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    return await response.json();

  } catch (error) {
    console.error("error fetching weather data", error);
    return null;
  }
}