import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";
import Click from "../Click/click";
import Location from "../Location/location";
import Mark from "../Marker/marker";
import Search from "../Search/search";
import Weather from "../Weather/weather";
import "leaflet/dist/leaflet.css";
import "./map.css";

function Map() {
  const [MyPosition, setMyPosition] = useState([51.505, -0.09]);
  const [weatherData, setWeatherData] = useState(null);
  const [markedPosition, setMarkedPosition] = useState(null);
  return (
    <>
      <MapContainer center={MyPosition} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Click setMarkedPosition={setMarkedPosition} />
        <Mark markedPosition={markedPosition} />
        <Search />
        <Location setMyPosition={setMyPosition} />
        <Weather
          markedPosition={markedPosition}
          setWeatherData={setWeatherData}
          weatherData={weatherData}
        />
      </MapContainer>
    </>
  );
}

export default Map;
