import { useState } from "react";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./marker.css"

function Marker() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
}

export default Marker;
