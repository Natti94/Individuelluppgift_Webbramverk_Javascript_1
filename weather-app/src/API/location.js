export async function LocationData(setMyPosition) {
  const apiUrl_location = "https://geolocation-db.com/json/";
  try {
    const responseLocation = await fetch(apiUrl_location);
    const DataLocation = await responseLocation.json();
    if (DataLocation.lat && DataLocation.lon) {
      setMyPosition([DataLocation.lat, DataLocation.lon]);
    }
  } catch (error) {
    console.error("error fetching location data", error);
  }
}