export function getUserLocation(setMyPosition, setLoading) {
  setLoading(true);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMyPosition([position.coords.latitude, position.coords.longitude]);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching location:", error.message);
        alert(`Location Error: ${error.message}`);
        setLoading(false);
      },
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    alert("Geolocation is not supported by this browser.");
    setLoading(false);
  }
}

export async function fetchLocationData(setMyPosition) {
  const apiUrl_location = "https://geolocation-db.com/json/";
  try {
    const responseLocation = await fetch(apiUrl_location);
    const DataLocation = await responseLocation.json();
    if (DataLocation.lat && DataLocation.lon) {
      setMyPosition([DataLocation.lat, DataLocation.lon]);
    }
  } catch (error) {
    console.error("Error fetching location data", error);
    alert("Failed to fetch location from external API.");
  }
}