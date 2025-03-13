import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";
import Click from "../Click/click";
import Location from "../Location/location";
import Mark from "../Marker/marker";
import Weather from "../Weather/weather";
import "leaflet/dist/leaflet.css";
import "./map.css";

function Map() {
  const [position, setPosition] = useState(null);
  const [WeatherData, setWeatherData] = useState(null);
  const [markedPosition, setMarkedPosition] = useState(null);
  return (
    <>
      <MapContainer>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Click setMarkedPosition={setMarkedPosition} />
        <Location position={setPosition} />
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
