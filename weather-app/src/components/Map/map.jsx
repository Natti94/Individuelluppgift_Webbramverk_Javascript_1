import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";
import Click from "../Click/click";
import Mark from "../Marker/marker";
import Weather from "../Weather/weather";
import "leaflet/dist/leaflet.css";
import "./map.css";

function Map() {
  const [WeatherData, setWeatherData] = useState(null);
  const [markedPosition, setMarkedPosition] = useState(null);
  return (
    <>
      <MapContainer center={[51.5074, -0.1278]} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Click setMarkedPosition={setMarkedPosition} />
        <Mark markedPosition={markedPosition} />
        <Weather
          markedPosition={markedPosition}
          setWeatherData={setWeatherData}
          weatherData={WeatherData}
        />
      </MapContainer>
    </>
  );
}

export default Map;
