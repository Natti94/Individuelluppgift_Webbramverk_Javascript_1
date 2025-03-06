import { useMapEvents } from "react-leaflet";

function MapClick() {
  useMapEvents({
    click: (e) => {
      setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      fetchWeatherData(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default MapClick;
