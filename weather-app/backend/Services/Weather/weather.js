export async function WeatherData(lat, lon) {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("WeatherData fetch error:", error);
    return null;
  }
}

export async function ForeCastData(lat, lon) {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("ForeCastData fetch error:", error);
    return null;
  }
}
