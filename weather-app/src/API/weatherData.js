export async function WeatherData(lat, lon) {
  const apiKey = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    return await response.json();

  } catch (error) {
    console.error("error fetching weather data", error);
    return null;
  }
}